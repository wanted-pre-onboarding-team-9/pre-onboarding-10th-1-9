import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TextInput from './TextInput';
import { CreateTodoContainer, LogoutButton, TodoLogoutContainer } from './style';
import { createTodoData } from '../../api/todo';
import { CreateTodoProps } from '../../@types/todo';
import { TodoProps } from '../../@types/response';
import token from '../../utils/token';

const CreateTodo = ({ addNewTodo }: CreateTodoProps) => {
  const navigate = useNavigate();
  const [todoContent, setTodoContent] = useState<string>('');

  const createTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createTodoData(todoContent)?.then((res: unknown) => {
      if (res) {
        const newTodo = res as TodoProps;
        addNewTodo(newTodo);
        setTodoContent('');
      }
    });
  };

  const onClickLogout = () => {
    token.clean();
    navigate('/');
  };

  return (
    <CreateTodoContainer>
      <div>
        <TodoLogoutContainer>
          <h2>Todo List</h2>
          <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
        </TodoLogoutContainer>
        <p> 투두리스트에 추가할 내용을 입력 후 추가 버튼을 눌러주세요.</p>
      </div>
      <form onSubmit={createTodo}>
        <TextInput
          name="todoContent"
          value={todoContent}
          placeholder="Please enter the contents"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodoContent(e.target.value);
          }}
        />
        <Button disabled={todoContent?.length === 0} text="추가" />
      </form>
    </CreateTodoContainer>
  );
};

export default CreateTodo;

import { useNavigate } from 'react-router-dom';
import { createTodoData } from '../../api/todo';
import { CreateTodoProps } from '../../@types/todo';
import token from '../../utils/token';
import useInput from '../../hooks/useInput';
import Form from '../common/Form';
import * as S from './style';

const CreateTodo = ({ addNewTodo }: CreateTodoProps) => {
  const { value, onChange, clear } = useInput('');
  const navigate = useNavigate();

  const createTodo = async () => {
    const res = await createTodoData(value);
    if (res.isSuccess) {
      addNewTodo(res.data);
      clear();
    }
  };

  const onClickLogout = () => {
    token.clean();
    navigate('/');
  };

  return (
    <S.CreateTodoContainer>
      <div>
        <S.TodoLogoutContainer>
          <h2>Todo List</h2>
          <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
        </S.TodoLogoutContainer>
        <p> 투두리스트에 추가할 내용을 입력 후 추가 버튼을 눌러주세요.</p>
      </div>
      <Form onSubmit={createTodo}>
        <S.RowContainer>
          <S.Input
            name="todoContent"
            value={value}
            placeholder="Please enter the contents"
            onChange={onChange}
          />
          <S.Button disabled={value.length === 0}>추가</S.Button>
        </S.RowContainer>
      </Form>
    </S.CreateTodoContainer>
  );
};

export default CreateTodo;

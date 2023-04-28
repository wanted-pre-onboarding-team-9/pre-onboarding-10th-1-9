import { createTodoData } from '../../api/todo';
import { CreateTodoProps } from '../../@types/todo';
import useInput from '../../hooks/useInput';
import Form from '../common/Form';
import * as S from './style';

const CreateTodo = ({ addNewTodo }: CreateTodoProps) => {
  const { value, onChange, clear } = useInput('');

  const createTodo = async () => {
    const newTodo = await createTodoData(value);
    addNewTodo(newTodo);
    clear();
  };

  return (
    <S.CreateTodoContainer>
      <div>
        <h2>Todo List</h2>
        <p> 투두리스트에 추가할 내용을 입력 후 추가 버튼을 눌러주세요.</p>
      </div>
      <Form onSubmit={createTodo}>
        <S.Input
          name="todoContent"
          value={value}
          placeholder="Please enter the contents"
          onChange={onChange}
        />
        <S.Button disabled={value.length === 0}>추가</S.Button>
      </Form>
    </S.CreateTodoContainer>
  );
};

export default CreateTodo;

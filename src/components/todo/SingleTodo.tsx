import { SingleTodoProps, Todo } from '../../@types/todo';
import { updateTodo } from '../../api/todo';
import useInput from '../../hooks/useInput';

import CheckBox from './CheckBox';
import Form from '../common/Form';

import * as S from './style';

const SingleTodo = ({
  todo,
  updateRevisedTodo,
  onClickDelete,
  isEditing,
  setEditingId,
}: SingleTodoProps) => {
  const { value, onChange, clear } = useInput(todo.todo);

  const onUpdateTodo = async (newTodo: Todo) => {
    await updateTodo(newTodo);
    if (newTodo.id) {
      updateRevisedTodo(newTodo.id, newTodo);
    }
    setEditingId(null);
  };
  const onUpdateTodoText = () => onUpdateTodo({ ...todo, todo: value });
  const onToggleCompleted = () => onUpdateTodo({ ...todo, isCompleted: !todo.isCompleted });

  if (isEditing) {
    return (
      <S.TodoContainer>
        <CheckBox checked={todo.isCompleted} disabled />
        <Form onSubmit={onUpdateTodoText}>
          <S.RowContainer>
            <S.Input name="todo" value={value} onChange={onChange} />
            <S.Button onClick={onUpdateTodoText}>제출</S.Button>
            <S.Button onClick={() => clear()}>취소</S.Button>
          </S.RowContainer>
        </Form>
      </S.TodoContainer>
    );
  }

  return (
    <S.TodoContainer>
      <S.Label htmlFor={`${todo.id}`}>
        <CheckBox checked={todo.isCompleted} onChange={onToggleCompleted} />
        <span>{todo.todo}</span>
      </S.Label>
      <S.Button onClick={() => setEditingId(todo.id)}>수정</S.Button>
      <S.Button onClick={() => onClickDelete(todo.id)}>삭제</S.Button>
    </S.TodoContainer>
  );
};
export default SingleTodo;

import { Todo } from '../../@types/todo';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import { updateTodo } from '../../api/todo';
import Button from './Button';

interface SingleTodoProps {
  todo: Todo;
  updateRevisedTodo: (targetId: number, newTodo: Todo) => void;
  onClickDelete: (id: number) => void;
  form: Todo;
  onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<Todo>>;
  clear: () => void;
}

const SingleTodo = ({
  todo,
  updateRevisedTodo,
  onClickDelete,
  form,
  onChangeForm,
  setForm,
  clear,
}: SingleTodoProps) => {
  const onUpdateTodo = async (data: Todo) => {
    await updateTodo(data);
    if (data?.id) updateRevisedTodo(data.id, data);
    clear();
  };

  return (
    <li key={todo.id} style={{ display: 'flex', flexDirection: 'row' }}>
      <CheckBox
        checked={todo.isCompleted}
        onClick={() => {
          onUpdateTodo({
            id: todo?.id,
            todo: todo?.todo,
            isCompleted: !todo?.isCompleted,
            userId: todo?.userId,
          });
        }}
      />
      {form?.id === todo?.id ? (
        <TextInput name="todo" value={form?.todo} onChange={onChangeForm} />
      ) : (
        <p>{todo?.todo}</p>
      )}
      <div style={{ marginLeft: 'auto' }}>
        <Button
          text={form?.id === todo?.id ? '제출' : '수정'}
          onClick={() => {
            if (form?.id === todo?.id) {
              onUpdateTodo(form);
              clear();
            } else {
              setForm({
                id: todo?.id,
                todo: todo?.todo,
                isCompleted: todo?.isCompleted,
                userId: todo?.userId,
              });
            }
          }}
        />
        <Button
          text={form?.id === todo?.id ? '취소' : '삭제'}
          onClick={() => {
            if (form?.id === todo?.id) {
              clear();
            } else if (todo.id) onClickDelete(todo.id);
          }}
        />
      </div>
    </li>
  );
};
export default SingleTodo;

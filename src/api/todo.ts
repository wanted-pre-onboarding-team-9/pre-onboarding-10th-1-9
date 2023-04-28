import ApiUrl from './ApiUrl';
import instance from '.';
import { TodoProps } from '../@types/response';

export const getTodoData = async () => {
  const { data } = await instance.get(ApiUrl.todo);
  return data;
};

export const removeTodo = async (id: number) => {
  await instance.delete(`${ApiUrl.todo}/${id}`);
};

export const updateTodo = async (todo: TodoProps) => {
  await instance.put(`${ApiUrl.todo}/${todo.id}`, {
    todo: todo.todo,
    isCompleted: todo?.isCompleted,
  });
};

export const createTodoData = async (todo: string) => {
  const { data } = await instance.post(ApiUrl.todo, { todo });
  return data;
};

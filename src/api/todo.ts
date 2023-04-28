import ApiUrl from './ApiUrl';
import instance from '.';
import { Todo } from '../@types/todo';

export const getTodoData = async () => {
  const { data } = await instance.get<Todo[]>(ApiUrl.todo);
  return data;
};

export const removeTodo = async (id: number) => {
  await instance.delete(`${ApiUrl.todo}/${id}`);
};

export const updateTodo = async (todo: Todo) => {
  await instance.put(`${ApiUrl.todo}/${todo.id}`, {
    todo: todo.todo,
    isCompleted: todo?.isCompleted,
  });
};

export const createTodoData = async (todo: string) => {
  const { data } = await instance.post(ApiUrl.todo, { todo });
  return data;
};

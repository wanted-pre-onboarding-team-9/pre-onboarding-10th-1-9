import ApiUrl from './ApiUrl';
import instance from '.';
import {
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodosReponse,
  UpdateTodoResponse,
} from '../@types/response';
import { Todo } from '../@types/todo';

export const getTodoData = async () => {
  const { data } = await instance.get<GetTodosReponse>(ApiUrl.todo);
  return data;
};

export const removeTodo = async (id: Todo['id']) => {
  await instance.delete<DeleteTodoResponse>(`${ApiUrl.todo}/${id}`);
};

export const updateTodo = async (todo: Todo) => {
  await instance.put<UpdateTodoResponse>(`${ApiUrl.todo}/${todo.id}`, {
    todo: todo.todo,
    isCompleted: todo.isCompleted,
  });
};

export const createTodoData = async (todo: Todo['todo']) => {
  const { data } = await instance.post<CreateTodoResponse>(ApiUrl.todo, { todo });
  return data;
};

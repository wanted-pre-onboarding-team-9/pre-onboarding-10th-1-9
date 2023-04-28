import { AxiosError } from 'axios';
import ApiUrl from './ApiUrl';
import instance, { createDefaultAPIError } from '.';
import {
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodosReponse,
  APIResponse,
  UpdateTodoResponse,
} from '../@types/api';
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

export const createTodoData = async (
  todo: Todo['todo'],
): Promise<APIResponse<CreateTodoResponse>> => {
  try {
    const response = await instance.post(ApiUrl.todo, { todo });
    return { isSuccess: true, data: response.data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.statusCode === 401) {
      return {
        isSuccess: false,
        message: '로그인이 필요한 기능입니다.',
      };
    }
    return createDefaultAPIError(error);
  }
};

import { Todo } from './todo';

export interface APIError {
  isSuccess: false;
  message: string;
}

export interface APISuccess<T> {
  isSuccess: true;
  data: T;
}

export type APIResponse<T> = APIError | APISuccess<T>;

export interface SignInResponse {
  access_token: string;
}

export type SignUpResponse = null;

export type CreateTodoResponse = Todo;

export type GetTodosReponse = Todo[];

export type UpdateTodoResponse = Todo;

export type DeleteTodoResponse = null;

import { Todo } from './todo';

export interface SignInResponse {
  access_token: string;
}

export type SignUpResponse = null;
export interface CreateTodoResponse {
  todo: Todo['todo'];
}

export type GetTodosReponse = Todo[];

export type UpdateTodoResponse = Todo;

export type DeleteTodoResponse = null;

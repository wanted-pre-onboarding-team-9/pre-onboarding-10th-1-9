import { Todo } from './todo';

export interface SignInResponse {
  access_token: string;
}

export type SignUpResponse = null;

export type CreateTodoResponse = Todo;

export type GetTodosReponse = Todo[];

export type UpdateTodoResponse = Todo;

export type DeleteTodoResponse = null;

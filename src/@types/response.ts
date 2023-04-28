export interface SignInResponse {
  access_token: string;
}

export interface TodoProps {
  id: number | undefined;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

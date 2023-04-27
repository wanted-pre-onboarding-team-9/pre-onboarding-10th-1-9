export interface AuthProps {
  email: string;
  password: string;
}

export interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

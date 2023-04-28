export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CheckBoxProps {
  className?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface TextInputProps {
  className?: string;
  name: string;
  value: string;
  placeholder?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SingleTodoProps {
  todo: Todo;
  updateRevisedTodo: (targetId: Todo['id'], newTodo: Todo) => void;
  onClickDelete: (id: Todo['id']) => void;
  isEditing: boolean;
  setEditingId: React.Dispatch<React.SetStateAction<Todo['id'] | null>>;
}

export interface CreateTodoProps {
  addNewTodo: (newTodo: Todo) => void;
}

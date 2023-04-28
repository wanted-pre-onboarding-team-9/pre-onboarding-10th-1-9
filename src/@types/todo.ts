export interface Todo {
  id?: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CheckBoxProps {
  className?: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
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

export interface TextInputStyleProps {
  width?: string;
}

export interface SingleTodoProps {
  editingTodoId: number | null;
  todoData: Todo;
  updateEditingTodoId: (targetId: number | null) => void;
  filterDeletedTodo: (targetId: number) => void;
}

export interface CreateTodoProps {
  addNewTodo: (newTodo: Todo) => void;
}

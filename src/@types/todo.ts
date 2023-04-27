export interface CheckBoxProps {
  className?: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  text: string;
}

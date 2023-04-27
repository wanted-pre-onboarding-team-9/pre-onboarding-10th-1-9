export interface CheckBoxProps {
  className?: string;
  checked: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  text: string;
}

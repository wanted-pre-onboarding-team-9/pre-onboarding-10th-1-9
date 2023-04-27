import { Ref } from 'react';

export interface CheckBoxProps {
  className?: string;
  checkboxRef: Ref<HTMLInputElement>;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

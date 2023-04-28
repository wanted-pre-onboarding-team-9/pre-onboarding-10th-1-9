import React from 'react';
import { ButtonProps } from '../../@types/todo';
import { ButtonContainer } from './style';

const Button = ({ onClick, text, disabled }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

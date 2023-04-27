import React from 'react';
import { CheckBoxProps } from '../../@types/todo';
import CheckBoxContainer from './style';

const CheckBox = ({ className, checked, onClick }: CheckBoxProps) => {
  return (
    <CheckBoxContainer className={className}>
      <input type="checkbox" onClick={onClick} checked={checked} />
    </CheckBoxContainer>
  );
};

export default CheckBox;

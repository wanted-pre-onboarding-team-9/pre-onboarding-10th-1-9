import React from 'react';
import { CheckBoxProps } from '../../@types/todo';
import { CheckBoxContainer } from './style';

const CheckBox = ({ className, checked, onChange, onClick }: CheckBoxProps) => {
  return (
    <CheckBoxContainer className={className}>
      <input type="checkbox" defaultChecked={checked} onChange={onChange} onClick={onClick} />
    </CheckBoxContainer>
  );
};

export default CheckBox;

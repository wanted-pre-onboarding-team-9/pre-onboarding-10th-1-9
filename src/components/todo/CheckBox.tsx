import React from 'react';
import { CheckBoxProps } from '../../@types/todo';
import { CheckBoxContainer } from './style';

const CheckBox = ({ className, checkboxRef, checked, onChange }: CheckBoxProps) => {
  return (
    <CheckBoxContainer className={className}>
      <input type="checkbox" ref={checkboxRef} defaultChecked={checked} onChange={onChange} />
    </CheckBoxContainer>
  );
};

export default CheckBox;

import React from 'react';
import { CheckBoxProps } from '../../@types';
import CheckBoxContainer from './style';

function CheckBox({ className, checked, onClick }: CheckBoxProps) {
  return (
    <CheckBoxContainer className={className}>
      <input type="checkbox" onClick={onClick} checked={checked} />
    </CheckBoxContainer>
  );
}

export default CheckBox;

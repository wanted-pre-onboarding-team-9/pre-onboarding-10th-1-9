import { CheckBoxProps } from '../../@types/todo';
import * as S from './style';

const CheckBox = ({ className, checked, disabled, onChange }: CheckBoxProps) => {
  return (
    <S.Checkbox
      type="checkbox"
      className={className}
      defaultChecked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default CheckBox;

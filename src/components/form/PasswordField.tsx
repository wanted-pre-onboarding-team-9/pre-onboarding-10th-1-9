/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */

import Input from '../commons/Input';

const PasswordField = ({
  value,
  onChange,
}: Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) => (
  <label htmlFor="password">
    <Input
      id="password"
      type="password"
      value={value}
      onChange={onChange}
      placeholder="비밀번호는 8자 이상 입력해주세요."
      data-testid="password-inpt"
    />
  </label>
);

export default PasswordField;

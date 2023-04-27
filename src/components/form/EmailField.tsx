/* eslint-disable jsx-a11y/label-has-associated-control */

import Input from '../commons/Input';

const EmailField = ({
  value,
  onChange,
}: Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) => (
  <label htmlFor="password">
    <Input
      id="email"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="이메일은 @를 포함하여 입력해주세요."
      data-testid="email-inpt"
    />
  </label>
);

export default EmailField;

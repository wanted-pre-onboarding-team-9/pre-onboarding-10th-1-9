/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */

import Input from '../commons/Input';

const EmailField = ({ value, onChange }: Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) => (
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
import * as S from './style';

const EmailField = ({
  value,
  onChange,
}: Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) => (
  <S.Input
    id="email"
    name="email"
    type="text"
    value={value}
    onChange={onChange}
    placeholder="이메일은 @를 포함하여 입력해주세요."
    data-testid="email-input"
  />
);

export default EmailField;

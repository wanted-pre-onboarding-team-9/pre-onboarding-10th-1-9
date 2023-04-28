import * as S from './style';

const PasswordField = ({
  value,
  onChange,
}: Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) => (
  <S.Input
    id="password"
    name="password"
    type="password"
    value={value}
    onChange={onChange}
    placeholder="비밀번호는 8자 이상 입력해주세요."
    data-testid="password-input"
  />
);

export default PasswordField;

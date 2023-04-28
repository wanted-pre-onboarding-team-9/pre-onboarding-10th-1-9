import Form from '../components/form/Form';
import EmailField from '../components/form/EmailField';
import PasswordField from '../components/form/PasswordField';
import ErrorMessage from '../components/form/ErrorMessage';

import useForm from '../hooks/useForm';

import { isInvalidEmail, isInvalidPassword } from '../utils/validators';

import * as S from './style';

const SignUp = () => {
  const { values, errors, isError, onChange } = useForm({
    initialValues: { email: '', password: '' },
    validators: { email: isInvalidEmail, password: isInvalidPassword },
  });

  const onSignUp = () => {
    // TODO: 추가하기!
  };

  return (
    <S.Wrapper>
      <S.Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="signup"
      />
      <S.Title>회원가입을 해주세요.</S.Title>
      <Form onSubmit={onSignUp}>
        <EmailField value={values.email} onChange={onChange} />
        <ErrorMessage message={errors.email} />
        <PasswordField value={values.password} onChange={onChange} />
        <ErrorMessage message={errors.password} />
        <S.Button type="submit" data-testid="signup-button" disabled={isError}>
          회원가입
        </S.Button>
      </Form>
      <S.NavigatorText to="/signin">로그인 하러가기</S.NavigatorText>
    </S.Wrapper>
  );
};

export default SignUp;

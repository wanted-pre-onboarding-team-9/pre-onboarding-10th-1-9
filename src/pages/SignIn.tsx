import Form from '../components/form/Form';
import EmailField from '../components/form/EmailField';
import PasswordField from '../components/form/PasswordField';
import ErrorMessage from '../components/form/ErrorMessage';

import useForm from '../hooks/useForm';

import { isInvalidEmail, isInvalidPassword } from '../utils/validators';

import * as S from './style';

const SignIn = () => {
  const { values, errors, isError, onChange } = useForm({
    initialValues: { email: '', password: '' },
    validators: { email: isInvalidEmail, password: isInvalidPassword },
  });

  const onSignIn = () => {
    // TODO: 추가하기!
  };

  return (
    <S.Wrapper>
      <S.MainImage
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="signin"
      />
      <S.Title>로그인을 해주세요.</S.Title>
      <Form onSubmit={onSignIn}>
        <EmailField value={values.email} onChange={onChange} />
        <ErrorMessage message={errors.email} />
        <PasswordField value={values.password} onChange={onChange} />
        <ErrorMessage message={errors.password} />
        <S.Button type="submit" data-testid="signin-button" disabled={isError}>
          로그인
        </S.Button>
      </Form>
      <S.NavigatorText to="/signup">회원가입 하러가기</S.NavigatorText>
    </S.Wrapper>
  );
};

export default SignIn;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form/Form';
import EmailField from '../components/form/EmailField';
import PasswordField from '../components/form/PasswordField';
import ErrorMessage from '../components/form/ErrorMessage';

import useForm from '../hooks/useForm';

import { isInvalidEmail, isInvalidPassword } from '../utils/validators';

import * as S from './style';
import { signIn } from '../api/auth';
import token from '../utils/token';

const SignIn = () => {
  const { values, errors, isError, onChange } = useForm({
    initialValues: { email: '', password: '' },
    validators: { email: isInvalidEmail, password: isInvalidPassword },
  });
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  const onSignIn = async () => {
    const { email, password } = values;
    if (typeof email !== 'string' || typeof password !== 'string') {
      setErrorMsg('잘못된 입력입니다.');
      return;
    }
    const { message, success, access_token: accessToken } = await signIn({ email, password });
    if (success && accessToken) {
      token.set(accessToken);
      navigate('/todo');
    } else {
      setErrorMsg(message);
    }
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
        <ErrorMessage message={errorMsg} />
      </Form>
      <S.NavigatorText to="/signup">회원가입 하러가기</S.NavigatorText>
    </S.Wrapper>
  );
};

export default SignIn;

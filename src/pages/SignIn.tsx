import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { signIn } from '../api/auth';
import token from '../utils/token';
import { isInvalidEmail, isInvalidPassword } from '../utils/validators';
import Form from '../components/common/Form';
import EmailField from '../components/common/EmailField';
import PasswordField from '../components/common/PasswordField';
import ErrorMessage from '../components/common/ErrorMessage';

import * as S from './style';

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
    const res = await signIn({ email, password });
    if (res.isSuccess) {
      token.set(res.data.access_token);
      navigate('/todo');
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="signin"
      />
      <S.Title>로그인을 해주세요.</S.Title>
      <Form onSubmit={onSignIn}>
        <EmailField value={values.email} onChange={onChange} />
        <ErrorMessage message={values.email.length === 0 ? '' : errors.email} />
        <PasswordField value={values.password} onChange={onChange} />
        <ErrorMessage message={values.password.length === 0 ? '' : errors.password} />
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

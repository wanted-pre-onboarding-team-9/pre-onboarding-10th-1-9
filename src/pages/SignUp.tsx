import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { signUp } from '../api/auth';
import { isInvalidEmail, isInvalidPassword } from '../utils/validators';

import Form from '../components/common/Form';
import EmailField from '../components/common/EmailField';
import PasswordField from '../components/common/PasswordField';
import ErrorMessage from '../components/common/ErrorMessage';

import * as S from './style';

const SignUp = () => {
  const { values, errors, isError, onChange } = useForm({
    initialValues: { email: '', password: '' },
    validators: { email: isInvalidEmail, password: isInvalidPassword },
  });
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  const onSignUp = async () => {
    const { email, password } = values;
    if (typeof email !== 'string' || typeof password !== 'string') {
      setErrorMsg('잘못된 입력입니다.');
      return;
    }
    const res = await signUp({ email, password });
    if (res.isSuccess) {
      navigate('/signin');
    } else {
      setErrorMsg(res.message);
    }
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
        <ErrorMessage message={values.email.length === 0 ? '' : errors.email} />
        <PasswordField value={values.password} onChange={onChange} />
        <ErrorMessage message={values.password.length === 0 ? '' : errors.password} />
        <S.Button type="submit" data-testid="signup-button" disabled={isError}>
          회원가입
        </S.Button>
        <ErrorMessage message={errorMsg} />
      </Form>
      <S.NavigatorText to="/signin">로그인 하러가기</S.NavigatorText>
    </S.Wrapper>
  );
};

export default SignUp;

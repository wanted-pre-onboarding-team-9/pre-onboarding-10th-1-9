/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import SignInForm from '../components/SignIn/SignInForm';

import * as S from './style';

const SignIn = () => {
  return (
    <S.Wrapper>
      <S.MainImage
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="signin"
      />
      <S.Title>로그인을 해주세요.</S.Title>
      <SignInForm />
      <S.NavigatorText to="/signup">회원가입 하러가기</S.NavigatorText>
    </S.Wrapper>
  );
};

export default SignIn;

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import SignUpForm from '../components/SignUp/SignUpForm';

import * as S from './style';

const SignUp = () => (
  <S.Wrapper>
    <S.MainImage
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="signup"
    />
    <S.Title>회원가입을 해주세요.</S.Title>
    <SignUpForm />
    <S.NavigatorText to="/signin">로그인 하러가기</S.NavigatorText>
  </S.Wrapper>
);

export default SignUp;

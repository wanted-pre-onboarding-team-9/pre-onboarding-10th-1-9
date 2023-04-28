import { useNavigate } from 'react-router-dom';

import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="signin"
      />
      <S.MainTitle>To-Do List</S.MainTitle>
      <S.MainButton type="button" name="signin" onClick={() => navigate('/signin')}>
        로그인 하러가기
      </S.MainButton>
      <S.MainButton type="button" name="signup" onClick={() => navigate('/signup')}>
        회원가입 하러가기
      </S.MainButton>
    </S.Wrapper>
  );
};

export default Main;

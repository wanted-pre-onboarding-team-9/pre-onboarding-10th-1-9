import * as S from './style';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <S.ErrorContainer>
    <S.Error>{message}</S.Error>
  </S.ErrorContainer>
);

export default ErrorMessage;

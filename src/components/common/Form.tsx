import * as S from './style';

const Form = ({
  children,
  onSubmit,
}: Pick<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return <S.Form onSubmit={handleSubmit}>{children}</S.Form>;
};

export default Form;

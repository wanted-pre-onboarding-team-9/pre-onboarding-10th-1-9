/* eslint-disable react/jsx-props-no-spreading */

import * as S from './style';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;

  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;

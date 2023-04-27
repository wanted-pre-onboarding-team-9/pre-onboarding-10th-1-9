/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import * as S from './style';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;

  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;

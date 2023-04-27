/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import { useState } from 'react';

import Button from '../commons/Button';
import Form from '../form/Form';

import EmailField from '../form/EmailField';
import PasswordField from '../form/PasswordField';
import ErrorMessage from '../commons/ErrorMessage';

const SignInForm = () => {
  const [text, setText] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setText({
      ...text,
      [id]: value,
    });
  };

  // TODO: 추후에 연동해야 함
  const isError = false;

  const emailError = 'aaa';
  const passwordError = 'aaa';

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <EmailField value={text.email} onChange={handleChangeText} />
        <ErrorMessage message={emailError || ''} />
        <PasswordField value={text.password} onChange={handleChangeText} />
        <ErrorMessage message={passwordError || ''} />
        <Button type="submit" disabled={isError}>
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default SignInForm;

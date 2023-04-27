import { useState } from 'react';

import Form from '../form/Form';
import EmailField from '../form/EmailField';
import PasswordField from '../form/PasswordField';
import Button from '../commons/Button';

const SignUpForm = () => {
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

  const isError = false;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <EmailField value={text.email} onChange={handleChangeText} />
        <PasswordField value={text.password} onChange={handleChangeText} />
        <Button type="submit" disabled={isError}>
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;

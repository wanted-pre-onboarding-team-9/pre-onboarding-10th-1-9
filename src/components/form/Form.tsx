import { FormEventHandler } from 'react';

const Form = ({
  children,
  onSubmit,
}: Pick<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;

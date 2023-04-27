/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

const Form = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
  const { children, onSubmit } = props;

  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: onSubmit 이벤트 처리 추가되어야 함
      }}
    >
      {children}
    </form>
  );
};

export default Form;

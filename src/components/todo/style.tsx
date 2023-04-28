import styled from 'styled-components';

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 3.125rem;
  height: 40px;
  border-radius: 0.313rem;
  padding: 0.875rem 0.625rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: 0.3s;
  margin-left: 10px;
  flex: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid;
    outline-offset: 2px;
    outline-color: #4f46e5;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: ${({ width }) => width || '100%'};
  height: 40px;
  padding: 5px 10px;
`;

export const CreateTodoContainer = styled.div`
  margin-bottom: 40px;

  & > form {
    display: flex;
    gap: 0px 15px;
  }
  button {
    width: 3.125rem;
    border-radius: 0.313rem;
    border: none;
    padding: 0px;
  }
`;

export const TodoContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;

  & > span {
    flex-grow: 1;
  }
`;

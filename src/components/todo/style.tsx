import styled from 'styled-components';
import { TextInputStyleProps } from '../../@types/todo';

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const ButtonContainer = styled.button`
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
  margin-bottom: 10px;

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

export const TextInputContainer = styled.div<TextInputStyleProps>`
  width: ${(props) => props.width};
  height: 40px;

  & > input {
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
  }
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

export const TodoLogoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LogoutButton = styled.p`
  color: #3f51b5;
  text-decoration: underline;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

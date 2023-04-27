import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 95%;
  border-radius: 4px;
  border: 1px #d1d5db solid;
  color: #111827;
  padding-inline: 8px;
  height: 2rem;

  ::placeholder {
    color: #9ca3af;
  }
`;

export const Button = styled.button`
  background: #4f46e5;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 2.5rem;
  cursor: pointer;

  :hover {
    background: #6666ff;
  }

  :disabled {
    background: #a5a4f2;
  }
`;

export const ErrorContainer = styled.div`
  height: 2em;
`;

export const Error = styled.div`
  color: #ff0000;
  font-size: 0.8em;
  padding-top: 0.5em;
`;

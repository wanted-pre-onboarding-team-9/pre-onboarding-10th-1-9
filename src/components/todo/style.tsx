import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid red;
`;

const Button = styled.button`
  background-color: #3f51b5;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: #fff;
  border-radius: 0.375 rem;s
  padding: 0.875rem  0.625rem;

`;

export default CheckBoxContainer;

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 25rem;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: block;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-block: 1em;
`;

export const MainImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 4em;
`;

export const NavigatorText = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  padding-block: 1.5em;
  color: #a2a2ff;
  font-weight: bold;
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

import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  color: #111111;
  & > span {
    font-style: italic;
    color: #fc5200;
    padding-right: 3px;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <span>Re</span>Title
    </LogoContainer>
  );
}

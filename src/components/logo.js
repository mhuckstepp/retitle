import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'hooks/user';

const LogoContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  color: #111111;
  & > span {
    font-style: italic;
    color: #fc5200;
    padding-right: 3px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default function Logo() {
  const [user] = useUser();
  const navigate = useNavigate();
  const navigateHome = () => navigate(user?.firstName ? '/dashboard' : '/');

  return (
    <LogoContainer onClick={navigateHome}>
      <span>Re</span>Title
    </LogoContainer>
  );
}

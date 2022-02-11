import React from 'react';
import PropTypes from 'prop-types';
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

export default function Logo(props) {
  const { success } = props 
  return (
    <LogoContainer>
      <span>Re</span>Title {success && 'Activated'}
    </LogoContainer>
  );
}

Logo.propTypes = {
  success: PropTypes.bool
};

Logo.defaultProps = {
  success: false,
}
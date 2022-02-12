import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';
import { Logo, Button } from 'components';
import { LeftAlignDiv, ButtonContainer } from 'components/styleComponents';

const Error = () => {
  return (
    <LeftAlignDiv>
      <Logo />
      <Alert severity="error">
        <AlertTitle>
          <h3>Error</h3>
        </AlertTitle>
        We had an issue syncing with your strava, please try again and make sure
        to check all the boxes on the Strava page{' '}
      </Alert>
      <ButtonContainer>
        <Button href="/">Start over</Button>
      </ButtonContainer>
    </LeftAlignDiv>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;

import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Logo } from 'components';
import { CenteredDiv } from 'components/styleComponents';

const Loader = () => {
  return (
    <CenteredDiv>
      <Logo />
      <Typography style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        Give us a second, we are registering with Strava and loading your
        information
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress size={60} style={{ color: 'black' }} />
      </Box>
    </CenteredDiv>
  );
};

export default Loader;

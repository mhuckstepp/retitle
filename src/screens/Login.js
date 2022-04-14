import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'hooks/user';
import { CONSTANTS } from 'bootstrap/constants';
import { CenteredDiv } from 'components/styleComponents';
import { Logo, Button } from 'components';

export default function Login() {
  const navigate = useNavigate();
  const [user] = useUser();
  if (user?.firstName) {
    navigate('/dashboard');
  }
  return (
    <CenteredDiv>
      <Logo />
      <Box style={{ margin: '1.5rem 3rem 3rem' }}>
        <Typography variant="h5" style={{ marginBottom: '2rem' }}>
          Tired of boring activity titles on Strava?
        </Typography>
        <Typography variant="h5">
          Automatically get a fun new title for your activity!
        </Typography>
      </Box>
      <Button href={CONSTANTS.STRAVA_AUTH_LINK}>Sign In With Strava</Button>
    </CenteredDiv>
  );
}

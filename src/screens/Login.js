import React from 'react';
import Button from '@mui/material/Button';
import { CONSTANTS } from 'bootstrap/constants';
import { CenteredDiv } from 'components/styleComponents';

export default function Login() {
  return (
    <CenteredDiv>
      <h2>Tired of boring/generic activity titles on Strava?</h2>
      <h2>
        Use ReTitle to get a fun new title for your activity automatically!
      </h2>
      <Button
        variant="contained"
        href={CONSTANTS.STRAVA_AUTH_LINK}
        color="warning">
        Auth with Strava
      </Button>
    </CenteredDiv>
  );
}

import React from 'react';
import { axiosCodeClient } from 'bootstrap/axios';
import { Button } from '@mui/material';
import { CenteredDiv, ButtonContainer } from 'components/styleComponents';
import { useUser } from 'hooks/user';

export default function Dashboard() {
  const [user] = useUser();

  const disableAccount = () =>
    axiosCodeClient(`/${user.stravaUserId}`, { method: 'DELETE' });

  return (
    <CenteredDiv>
      <h3>
        Welcome {user?.firstName || 'friend'}, you are now set up to get fun new
        titles to replace any generic titles
      </h3>
      <p>
        If you want to stop your fun titles, click below to turn off the
        integration.
      </p>
      <ButtonContainer>
        <Button variant="contained" onClick={disableAccount}>
          Disable my Re-Title account
        </Button>
      </ButtonContainer>
    </CenteredDiv>
  );
}

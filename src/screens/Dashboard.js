import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { axiosCodeClient } from 'bootstrap/axios';
import { Button, Logo } from 'components';
import {
  CenteredDiv,
  ButtonContainer,
  ExternalLink,
} from 'components/styleComponents';
import { useUser } from 'hooks/user';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user] = useUser();

  const disableAccount = async () => {
    try {
      await axiosCodeClient(`/${user.stravaUserId}`, { method: 'DELETE' });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const name = useMemo(() => {
    const defaultName = 'friend';

    if (!user?.firstName) return defaultName;
    // The default name for new users is 'Strava Athlete'.
    if (
      user.firstName?.toLowerCase() === 'strava' &&
      user?.lastName?.toLowerCase() === 'athlete'
    )
      return defaultName;

    return user.firstName;
  }, [user]);

  return (
    <CenteredDiv>
      <Logo />
      <Typography variant="h5">
        Welcome {name}, you are now set up to get fun new titles!
      </Typography>
      <br />
      <Typography variant="h6">
        Have an idea for a title?{' '}
        <ExternalLink
          href="https://forms.gle/umPdHwkoia66r3cJ8"
          target="_blank">
          Let us know!
        </ExternalLink>
      </Typography>
      <ButtonContainer>
        <Button onClick={disableAccount}>Disable my Re-Title account</Button>
      </ButtonContainer>
    </CenteredDiv>
  );
}

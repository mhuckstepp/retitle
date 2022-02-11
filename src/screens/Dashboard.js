import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosCodeClient } from 'bootstrap/axios';
import { Button, Logo } from 'components';
import { CenteredDiv, ButtonContainer } from 'components/styleComponents';
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

  const name = useMemo(
    () => {
      const defaultName = 'friend';

      if (!user?.firstName) return defaultName;
      // The default name for new users is 'Strava Athlete'.
      if (
        user.firstName?.toLowerCase() === 'strava' &&
        user?.lastName?.toLowerCase() === 'athlete'
      )
        return defaultName;

      return user.firstName;
    },
    [user],
  );

  return (
    <CenteredDiv>
      <Logo success/>
      <h3>
        Welcome {name}, you are now set up to get fun new titles to replace any
        generic titles
      </h3>
      <p>
        If you want to stop your fun titles, click below to turn off the
        integration.
      </p>
      <ButtonContainer>
        <Button onClick={disableAccount}>Disable my Re-Title account</Button>
      </ButtonContainer>
    </CenteredDiv>
  );
}

import React, { useEffect, useState } from "react";
import { axiosCodeClient } from "bootstrap/axios";
import { Button } from "@mui/material";
import { CenteredDiv, ButtonContainer } from "components/styleComponents";
import Loader from "components/Loader.component";
import Error from "./Error.component";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const disableAccount = () => {
    axiosCodeClient("/disable", {
      params: {
        id: user.id,
      },
    });
  };

  const fetchStravaUser = async (stravaCode) => {
    const response = await axiosCodeClient({
      params: { stravaCode },
    });
    setIsLoading(false);
    if (response.user) setUser(user);
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const stravaCode = Object.fromEntries(urlSearchParams.entries());
    if (stravaCode.error || !stravaCode.code) {
      setError(true);
      return;
    }
    fetchStravaUser(stravaCode.code);
  }, []);

  if (error) {
    return <Error />;
  }

  if (isLoading || !user.firstName) {
    return <Loader />;
  }

  return (
    <CenteredDiv>
      <h3>
        Welcome {user?.firstName || "friend"}, you are now set up to get fun new
        titles to replace any generic titles
      </h3>
      <p>
        If you want to stop your fun titles, go into your strava settings and
        turn off the integration.
      </p>
      <ButtonContainer>
        <Button variant="contained" onClick={disableAccount}>
          Disable my Re-Title account
        </Button>
      </ButtonContainer>
    </CenteredDiv>
  );
};

export default Settings;

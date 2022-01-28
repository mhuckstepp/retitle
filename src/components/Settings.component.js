import React, { useEffect, useState } from "react";
import { axiosCodeClient, axiosDisableClient } from "../axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CenteredDiv } from "./styleComponents";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const disableAccount = () => {
    axiosDisableClient({
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
    return (
      <CenteredDiv>
        <h2>
          We had an issue syncing with your strava, please try again and make
          sure to check all the boxes on the Strava page{" "}
        </h2>
      </CenteredDiv>
    );
  }

  if (isLoading || !user) {
    return (
      <CenteredDiv>
        <h2>
          {" "}
          Give us a second, we are registering with Strava and loading your
          information{" "}
        </h2>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </CenteredDiv>
    );
  }

  return (
    <CenteredDiv>
      <p>
        Welcome {user?.firstName || "friend"}, you are now set up to get fun new
        titles to replace any generic titles
      </p>
      <p>
        If you want to stop your fun titles, go into your strava settings and
        turn off the integration.
      </p>
      {/* <button onClick={disableAccount}>Disable my Re-Title account</button> */}
    </CenteredDiv>
  );
};

export default Settings;

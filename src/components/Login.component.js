import React from "react";
import Button from "@mui/material/Button";
import { CONSTANTS } from "../constants";
import { CenteredDiv } from "./styleComponents";

const Login = () => {
  return (
    <CenteredDiv>
      <h2>Tired of boring/generic activity titles on Strava?</h2>
      <h2>Use ReTitle to get a new fun new title for your activities!</h2>
      <Button
        variant="contained"
        href={CONSTANTS.STRAVA_AUTH_LINK}
        color="warning"
      >
        Auth with Strava
      </Button>
    </CenteredDiv>
  );
};

export default Login;

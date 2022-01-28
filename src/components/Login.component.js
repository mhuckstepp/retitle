import React from "react";
import Button from "@mui/material/Button";
import { CONSTANTS } from "../constants";
import { CenteredDiv } from "./styleComponents";

const Login = () => {
  return (
    <CenteredDiv>
      <p>
        Tired of boring generic activity titles on Strava? use ReTitle to get a
        new fun new title for your activities!
      </p>
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

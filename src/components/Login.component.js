import React from "react";
import Button from "@mui/material/Button";
import { CONSTANTS } from "../constants";
import { CenteredDiv } from "./styleComponents";

const Login = () => {
  return (
    <CenteredDiv>
      <p>Auth with Strava to get new title for your activities!</p>
      <Button
        variant="contained"
        href={CONSTANTS.STRAVA_AUTH_LINK}
        color="warning"
      >
        Click here to auth with Strava
      </Button>
    </CenteredDiv>
  );
};

export default Login;

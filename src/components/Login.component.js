import React from "react";
import Button from "@mui/material/Button";
import { CONSTANTS } from "../constants";

const Login = () => {
  return (
    <div>
      <p>Auth with Strava to get new title for your activities!</p>
      <Button
        variant="contained"
        href={CONSTANTS.STRAVA_AUTH_LINK}
        color="warning"
      >
        Click here to auth with Strava
      </Button>
    </div>
  );
};

export default Login;

import React from "react";
import { CONSTANTS } from "../constants";

const stravaAuthLink = `${CONSTANTS.STRAVA_BASE_URL}?client_id=${CONSTANTS.STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/settings&approval_prompt=auto&scope=activity:read_all,activity:write,profile:read_all`;

const Login = () => {
  return (
    <div>
      <p>Auth with Strava to get new title for your activities!</p>
      <a href={stravaAuthLink}>Click here to auth</a>
    </div>
  );
};

export default Login;

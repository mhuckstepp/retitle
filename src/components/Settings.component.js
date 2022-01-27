import React, { useEffect, useState } from "react";
import { axiosCodeClient, axiosDisableClient, tokenClient } from "../axios";

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
      params: {
        stravaCode: stravaCode.code,
      },
    });
    setIsLoading(false);
    if (response.user) setUser(user);
  };

  useEffect(async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const stravaCode = Object.fromEntries(urlSearchParams.entries());
    console.log("HERE", { stravaCode });
    if (stravaCode.error || !stravaCode.code) {
      setError(true);
      return;
    }
    const tokenResponse = await tokenClient({
      params: {
        client_id: 77230,
        client_secret: "165ffdd2ba67836cefcd26b6db3c6b75fe240f55",
        code: stravaCode.code,
        grant_type: "authorization_code",
      },
    });
    console.log(tokenResponse);
    // fetchStravaUser(stravaCode);
  }, []);

  if (error) {
    return (
      <div>
        <h2>
          {" "}
          We had an issue syncing with your strava, please try again and make
          sure to check all the boxes on the Strava page{" "}
        </h2>
      </div>
    );
  }
  if (isLoading || !user) {
    return (
      <div>
        <h2> Registering with Strava and loading you information </h2>
      </div>
    );
  }
  return (
    <div>
      <p>
        Welcome {user?.firstName}, you are now set up to get fun new titles to
        replace any generic titles
      </p>
      <button onClick={disableAccount}>Disable my Re-Title account</button>
    </div>
  );
};

export default Settings;

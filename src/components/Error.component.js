import React from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import { LeftAlignDiv, ButtonContainer } from "components/styleComponents";

const Error = () => {
  return (
    <LeftAlignDiv>
      <Alert severity="error">
        <AlertTitle>
          <h3>Error</h3>
        </AlertTitle>
        We had an issue syncing with your strava, please try again and make sure
        to check all the boxes on the Strava page{" "}
      </Alert>
      <ButtonContainer>
        <Button variant="contained" href="https://retitle.link">
          {" "}
          Start over{" "}
        </Button>
      </ButtonContainer>
    </LeftAlignDiv>
  );
};

export default Error;

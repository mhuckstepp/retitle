import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { CenteredDiv } from "components/styleComponents";

const Loader = () => {
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
};

export default Loader;

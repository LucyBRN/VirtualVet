import { Box } from "@mui/material";
import React, { Fragment } from "react";

const Google = () => {
  return (
    <Fragment>
      <Box
        component="img"
        sx={{
          height: 35,
          width: 35,
          maxHeight: { xs: 35, md: 35 },
          maxWidth: { xs: 35, md: 35 },
          boxShadow: 2,
        }}
        alt="Google icon"
        src="./assets/PNG/google-icon.png"
      />
    </Fragment>
  );
};

export default Google;

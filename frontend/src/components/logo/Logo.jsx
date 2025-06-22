import React, { Fragment } from "react";
import { Box } from "@mui/system";

const Logo = (props) => {
  return (
    <Fragment>
      <a href="/">
        <Box
          component="img"
          sx={{
            height: props.height,
            width: props.width,
            maxHeight: { xs: props.maxHeightXS, md: props.maxHeightMD },
            maxWidth: { xs: props.maxWidthXS, md: props.maxWidthMD },
          }}
          alt="A cat's paw."
          src="./assets/SVG/logo2.svg"
        />
      </a>
    </Fragment>
  );
};

export default Logo;

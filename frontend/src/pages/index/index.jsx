import React, { Fragment } from "react";
import { Button } from "@mui/material";
import classes from "./index.module.css";
import Navbar from "../../layouts/navbar/navbar";
import ServiceGrid from "../../components/serviceGrid/serviceGrid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

const index = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar className={classes.navbar} />
        <div class={classes.overlay}>
          <video src="./assets/MP4/vet-play.mp4" autoPlay loop muted />
        </div>
        <div className={classes.details}>
          <div className={classes.text}>
            <h2>Virtual Vet</h2>
            <h3>Your clinic's virtual space</h3>
            <p>For managing your business - anywhere, anytime!</p>
          </div>
          <ServiceGrid />
          <div className={classes.buttons}>
            <Button
              className={classes.loginBtn}
              type="button"
              variant="contained"
              role="link"
              href="/login"
              startIcon={<AccountCircleIcon />}
            >
              Log in
            </Button>
            <Button
              className={classes.desktopBtn}
              type="button"
              variant="contained"
              startIcon={<DesktopWindowsOutlinedIcon />}
            >
              Download desktop app
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;

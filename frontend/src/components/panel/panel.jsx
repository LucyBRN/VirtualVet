import * as React from "react";
import { Fragment } from "react";
import classes from "./panel.module.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../user/profile/profile";
import Settings from "../user/settings/settings";
import Statistics from "../user/statistics/statistics";

function PanelTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

PanelTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function Panel() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Box className={classes.box}>
        <AppBar position="static" color="default" className={classes.navbar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="none"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Statistics" {...a11yProps(1)} />
            <Tab label="Settings" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <PanelTab value={value} index={0} dir={theme.direction}>
          <Profile />
        </PanelTab>
        <PanelTab value={value} index={1} dir={theme.direction}>
          <Statistics />
        </PanelTab>
        <PanelTab value={value} index={2} dir={theme.direction}>
          <Settings />
        </PanelTab>
      </Box>
    </Fragment>
  );
}

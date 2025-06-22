import React, { Fragment } from "react";
import classes from "./input.module.css";
import { FormControl, FormLabel, Typography } from "@mui/material";

const Input = (props) => {
  const { label, errorMessage, onChange, id, ...inputs } = props;
  return (
    <Fragment>
      <FormControl>
        <FormLabel className={classes.label} htmlFor={props.label}>
          {props.label}
        </FormLabel>
        <input
          className={classes.input}
          InputProps={{ sx: { borderRadius: 30 } }}
          variant="outlined"
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          onChange={onChange}
          {...inputs}
        />
        <Typography className={classes.errorMsg}>{errorMessage}</Typography>
      </FormControl>
    </Fragment>
  );
};

export default Input;

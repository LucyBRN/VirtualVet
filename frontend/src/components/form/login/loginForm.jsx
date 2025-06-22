import React, { Fragment, useState } from "react";
import { Button, Link, Typography } from "@mui/material";
import classes from "./loginForm.module.css";
import FormInput from "../input/input.jsx";
import Google from "../../logo/Google.jsx";

const LoginForm = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    errorMessage: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Email",
      label: "Email Address",
      type: "email",
      placeholder: "JohnSmith@gmail.com",
      errorMessage: "",
      pattern: "",
      required: true,
    },
    {
      id: 2,
      name: "Password",
      label: "Password",
      type: "text",
      placeholder: "Password",
      errorMessage: "",
      pattern: ``,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <form>
          <Typography className={classes.header}>SIGN IN</Typography>
          <Typography className={classes.details}>
            Please enter your details.
          </Typography>
          {inputs.map((input) => (
            <div>
              <FormInput
                className={classes.input}
                key={input.id}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={values[input.name]}
                onChange={onChange}
                errorMessage={input.errorMessage}
              />
            </div>
          ))}
          <div className={classes.actions}>
            <div className={classes.checkbox}>
              <Typography>
                <input
                  className={classes.checkbox}
                  id="checkbox"
                  type="checkbox"
                />
                Remember me
              </Typography>
            </div>
            <Typography>Forgotten Password ?</Typography>
          </div>
          <div className={classes.buttons}>
            <Button
              className={classes.buttonsLogin}
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              SIGN IN
            </Button>
            <Button
              className={classes.buttonsGoogle}
              type="button"
              variant="contained"
              startIcon={<Google />}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </div>
          <div className={classes.signUpText}>
            <Link href="/register">Don't have an account ? Sign Up</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginForm;

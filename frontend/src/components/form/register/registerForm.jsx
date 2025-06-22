import React, { Fragment, useState } from "react";
import { Button, Divider, Link, Typography } from "@mui/material";
import classes from "./registerForm.module.css";
import FormInput from "../input/input.jsx";
import Google from "../../logo/Google.jsx";

const RegisterForm = () => {
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
      errorMessage: "Invalid email !",
      pattern:
        '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
      required: true,
    },
    {
      id: 2,
      name: "Password",
      label: "Password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password must contain minimum eight characters, at least one letter, one number and one special character !",
      pattern: `^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$`,
      required: true,
    },
    {
      id: 3,
      name: "repeat_password",
      label: "Repeat Password",
      type: "password",
      placeholder: "Repeat Password",
      errorMessage: "Passwords don't match !",
      pattern: values.Password,
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
          <Typography className={classes.header}>SIGN UP</Typography>
          <Typography className={classes.details}>
            Please provide your details.
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.buttonsGoogle}
              type="button"
              variant="contained"
              startIcon={<Google />}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </div>
          <Divider
            className={classes.divider}
            textAlign="center"
            sx={{
              border: "1px solid #E6E6E",
            }}
          >
            <Typography
              className={classes.text}
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                alignItems: "center",
              }}
            >
              OR
            </Typography>
          </Divider>
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
          <div className={classes.buttons}>
            <Button
              className={classes.buttonsLogin}
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              SIGN UP
            </Button>
          </div>
          <div className={classes.signUpText}>
            <Link href="/login">Already have an account ? Sign In</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;

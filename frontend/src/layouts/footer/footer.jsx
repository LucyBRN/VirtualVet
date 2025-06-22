import React, { Fragment } from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <footer className={classes.footer}>
          <p>
            Virtual Vet
            <br />
            <a href="mailto:virtualvet@mail.com">virtualvet@mail.com</a>
          </p>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;

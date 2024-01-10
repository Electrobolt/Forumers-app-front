import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import { signupLinks } from "../libs/data";
import styles from "../styleSheets/signup.module.css";


const Subscribe = () => {
  return (
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Sign Up</h2>
        </div>
        <Form className={styles["login-form"]} method="POST">
          <button type="submit">Sign up</button>
        </Form>
        <div className={styles["login-footer"]}>
          {signupLinks.map((option, index) => {
            const { link, text, icon } = option;
            return (
              <button key={index} className={styles.logbtn}>
                <Link to={link} className={styles.link}>
                  {icon} {text}
                </Link>
              </button>
            );
          })}
        </div>
      </div>
      <h4>Already have an account? </h4>
      <button className={styles.logbtn} style={{width:"13rem",padding:"0.3rem 0.5rem"}}><Link className={styles.link} to="/login">Log in now</Link></button>
    </div>
  );
};

export default Subscribe;

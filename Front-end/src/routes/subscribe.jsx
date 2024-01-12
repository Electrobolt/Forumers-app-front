import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import { signupLinks } from "../libs/data";
import styles from "../styleSheets/signup.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Subscribe = () => {
  const { user } = useAuth0();
  const { picture, name, nickname, email } = user;

  return (
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Payment form</h2>
        </div>
        <h5>Nom : {nickname}</h5>
        <h5>email : {email}</h5>
        <h5>Montant : </h5>
        {/*Gérer le montant en se servant de l'url comme avec ContactId */}
        <button className={styles.logbtn}>pay</button>
      </div>
    </div>
  );
};

export default Subscribe;

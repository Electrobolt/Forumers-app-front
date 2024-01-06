import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../styleSheets/navbar.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={()=>loginWithRedirect()} className={styles["login-button"]} type="submit">
      Login
    </button>
  );
};

export default LoginButton;

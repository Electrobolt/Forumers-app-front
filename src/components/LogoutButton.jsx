import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../styleSheets/navbar.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({logoutParams:{returnTo:window.location.origin}})}
      className={styles["login-button"]}
      type="submit"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

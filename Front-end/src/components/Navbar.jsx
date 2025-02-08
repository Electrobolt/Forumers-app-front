import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.png";
import Sidebar from "../components/Sidebar";
import styles from "../styleSheets/navbar.module.css";
import { authentificationData } from '../libs/data';
import LoginButton from "./buttons/loginButton";
import SignupButton from "./buttons/SignupButton";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <nav className>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["image"]} />
          <button className={styles["nav-toggle"]}>
            <FaBars onClick={() => setDisplay(!display)} />
          </button>
        </div>
        <Sidebar display={display} />
        <div className={styles["gap-buttons"]}>
        <Auth0Provider
          domain= {authentificationData.domain}
          clientId= {authentificationData.clientId}
          redirect-uri= {authentificationData.redirect_uri}
   	>
          <LoginButton />
          <SignupButton />
        </Auth0Provider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

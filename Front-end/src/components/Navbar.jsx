import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { sidebarData, social } from "../data";
import logo from "../logo.png";
import Sidebar from "../components/Sidebar";
import styles from "../styleSheets/navbar.module.css";
import { Link } from "react-router-dom";
import LoginButton from "../components/loginButton";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <nav>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <img src={logo} alt="logo" className={styles["image"]} />
          <button className={styles["nav-toggle"]}>
            <FaBars onClick={() => setDisplay(!display)} />
          </button>
        </div>
        <Sidebar display={display} />
        <LoginButton />
        <Link to="/signup">
          <button className={styles["login-button"]} type="submit">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

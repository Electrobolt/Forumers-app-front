import React, { useState } from "react";
import styles from "../styleSheets/body.module.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className={styles["body"]}>
      <div className={styles["container"]}>
        <div className={styles["welcomeContainer"]}>
          <div className={styles["welcomeText"]}>
            <h1 className={styles["heading-h1"]}>Welcome to Reditus Network</h1>
            <h2 className={styles["heading-h2"]}>
              A reverse proxy platform that allows developers to test the
              integration of third-party services into their application.
            </h2>
            <Link to="/signup">
              <button className={styles["login-button"]} type="submit">
                Get Started
              </button>
            </Link>
            <div className={styles["tech-button"]}>
              <Link to="https://ngrok.com/docs/what-is-ngrok/">
                <div>
              <button className={styles["login-button"]} type="submit">
                  About
              </button>
                  <div className={`${styles.htmlEmbed} ${styles.wEmbed}`}>
                    <svg
                      width="25"
                      height="15"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <clipPath id="clip0_903_41715">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.234375 0.823242)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/web-hosting-38/64/network-web-hosting-server-512.png"
            className={`img-unified ${styles.image}`}
            alt="Network Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;

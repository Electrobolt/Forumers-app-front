import styles from "../styleSheets/body.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Body = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/account",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };
  return (
    <div className={`${styles["body"]} `}>
      <div className={styles["container"]}>
        <div className={styles["welcomeContainer"]}>
          <div className={styles["welcomeText"]}>
            <h1 className={styles["heading-h1"]}>Welcome to Reditus Network</h1>
            <h2 className={styles["heading-h2"]}>
              A reverse proxy platform that allows developers to test the
              integration of third-party services into their application.
            </h2>
            <div className={styles["buttons"]}>
              <button className={styles["login-button"]} onClick={handleSignUp}>
                Get Started
              </button>
              <Link className={styles["about-page"]} to="/about">
                <button className={styles["login-button"]}>About</button>
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

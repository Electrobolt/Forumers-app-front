import { useAuth0 } from "@auth0/auth0-react";
import styles from "../../styleSheets/navbar.module.css";

const SignupButton = () => {
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
    <button onClick={handleSignUp} className={styles["login-button"]}>
      Sign Up
    </button>
  );
};

export default SignupButton;

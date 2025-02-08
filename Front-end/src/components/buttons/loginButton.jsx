import { Link } from "react-router-dom";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import styles from "../../styleSheets/navbar.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/account",
      },
    });
  };
  return (
    <button onClick={handleLogin} className={`${styles["login-button"]} ${styles["button"]}`}>
      Login
    </button>
  );
};

export default LoginButton;

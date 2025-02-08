import { Link } from "react-router-dom";
import styles from "../styleSheets/about-page.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const AboutPage = () => {
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
    <div className={styles["about-page"]}>
      <header>
        <div className={styles["container"]}>
          <div id="branding">
            <h1>Reditus Network</h1>
          </div>
        </div>
      </header>

      <div className={styles["container"]}>
        
        {/* Filler ici */}
        
        <div className={styles["end"]}>
          <em>
            Nous sommes passionnés par l'innovation et déterminés à fournir les
            meilleurs outils pour soutenir la communauté des développeurs.
            Forumers est plus qu'une plateforme de gestion de forums ; c'est
            un partenaire fiable dans votre parcours de développement.
          </em>
          <Link onClick={handleSignUp} style={{color:"blue",fontSize:"20px"}}>
            Rejoignez la communauté Forumers dès aujourd'hui et découvrez
            une nouvelle façon de communiquer dans applications !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

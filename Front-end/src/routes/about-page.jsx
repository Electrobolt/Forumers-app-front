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
        <h3>Bienvenue sur la page À propos de Reditus Network,</h3>
        <p>
          Votre solution de reverse proxy innovante et fiable conçue pour
          simplifier et sécuriser l'accès à vos applications locales depuis
          Internet.
        </p>
        <h3>Qu'est-ce que Reditus Network ?</h3>
        <p>
          Reditus Network est une plateforme de reverse proxy qui permet aux
          développeurs et aux professionnels de l'informatique de rendre leurs
          applications locales accessibles en ligne de manière sécurisée et sans
          la complexité de configurer un serveur ou de modifier les paramètres
          du réseau.
        </p>
        <h3>Comment fonctionne Reditus Network ?</h3>
        <p>
          Reditus Network crée un tunnel sécurisé entre votre application locale
          et un domaine public sur le web. En exécutant un simple agent sur
          votre machine locale, vous pouvez instantanément générer une URL
          publique qui redirige vers votre application. Cette URL peut être
          utilisée pour accéder à votre service depuis n'importe où, facilitant
          le partage avec des clients, des collègues ou des amis, ou pour tester
          des fonctionnalités sur des appareils mobiles et des plateformes
          externes.
        </p>
        <h3>Pourquoi choisir Reditus Network ?</h3>
        <p>
          <span>Facilité d'utilisation :</span> Avec Reditus Network, il n'est
          pas nécessaire d'avoir des connaissances approfondies en réseau ou en
          administration de serveurs. Notre interface conviviale et nos
          instructions claires vous permettent de démarrer en quelques minutes.{" "}
          <span>Sécurité :</span> La sécurité est notre priorité absolue.
          Reditus Network utilise des protocoles de cryptage avancés pour
          assurer la confidentialité et l'intégrité de vos données.
          <span>Personnalisation :</span> Nous comprenons que chaque projet est
          unique. Reditus Network offre des options de personnalisation pour
          répondre à vos besoins spécifiques, y compris des sous-domaines
          personnalisés et des configurations de port. <span>Fiabilité :</span>{" "}
          Notre infrastructure robuste garantit que votre tunnel reste stable et
          accessible, vous permettant de vous concentrer sur votre travail sans
          vous soucier des interruptions de service.
        </p>
        <h3>Que pouvez vous faire avec Reditus Network ?</h3>
        <p>
          <span>Développement et tests :</span> Testez facilement vos
          applications web et mobiles en conditions réelles sans déployer sur un
          serveur distant.
          <span>Démonstrations en direct :</span> Présentez vos projets en cours
          à des clients ou des parties prenantes sans avoir à déployer. Webhooks
          et
          <span>API :</span> Testez des webhooks localement en recevant des
          requêtes de services externes directement sur votre machine de
          développement.
          <span>Accès à distance :</span> Accédez à des applications locales,
          telles que des dashboards de monitoring ou des interfaces
          d'administration, depuis n'importe quel endroit.
        </p>
        <div className={styles["end"]}>
          <em>
            Nous sommes passionnés par l'innovation et déterminés à fournir les
            meilleurs outils pour soutenir la communauté des développeurs.
            Reditus Network est plus qu'une plateforme de reverse proxy ; c'est
            un partenaire fiable dans votre parcours de développement.
          </em>
          <Link onClick={handleSignUp} style={{color:"blue",fontSize:"20px"}}>
            Rejoignez la communauté Reditus Network dès aujourd'hui et découvrez
            une nouvelle façon de connecter vos applications au monde !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

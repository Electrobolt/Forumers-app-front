import { Link } from "react-router-dom";
import styles from "../styleSheets/download-agent.module.css";
const DownloadAgent = () => {
  return (
    <div className={styles["container"]}>
      <h1>Téléchargement de l'Agent Reditus</h1>
      <div className={styles["download-section"]}>
        <Link
          to="lien_vers_votre_agent.exe"
          download
          className={styles["download-button"]}
        >
          Télécharger l'Agent pour Windows
        </Link>
        <Link
          to="lien_vers_votre_agent.pkg"
          download
          className={styles["download-button"]}
        >
          Télécharger l'Agent pour macOS
        </Link>
        <Link
          to="lien_vers_votre_agent.sh"
          download
          className={styles["download-button"]}
        >
          Télécharger l'Agent pour Linux
        </Link>
      </div>
      <div className={styles["instructions"]}>
        <p>
          Pour installer l'Agent Reditus sur votre système, suivez les étapes
          ci-dessous :
        </p>
        <ol>
          <li>
            Téléchargez le fichier correspondant à votre système d'exploitation.
          </li>
          <li>Exécutez le fichier téléchargé pour démarrer l'installation.</li>
          <li>
            Suivez les instructions à l'écran pour terminer l'installation.
          </li>
          <li>Une fois l'installation terminée, lancez l'Agent Reditus.</li>
        </ol>
        <p>
          Si vous avez besoin d'aide ou si vous rencontrez des problèmes lors de
          l'installation, veuillez consulter notre{" "}
          <Link to="lien_vers_la_documentation">documentation</Link> ou
          contacter notre <Link to="lien_vers_le_support">support technique</Link>.
        </p>
      </div>
    </div>
  );
};

export default DownloadAgent;

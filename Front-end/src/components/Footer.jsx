import { social } from "../libs/data";
import styles from "../styleSheets/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.menu}`}>
        <div className={`${styles.list}`}>
          <span>Platform</span>
          <ul>
            <li>
              <Link to="/download">download agent</Link>
            </li>
            <li>
              <Link to="/pricing">free</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.list}`}>
          <span>Pricing</span>
          <ul>
            <li>
              <Link to="/pricing">free</Link>
            </li>
            <li>
              <Link to="/pricing">premium</Link>
            </li>
            <li>
              <Link to="/pricing"> vip</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.list}`}>
          <span>Get started</span>
          <ul>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <ul className={styles["social-icons"]}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <Link to={url}>{icon}</Link>
                </li>
              );
            })}
          </ul>
          {/* <p>Copyright &copy; 2024; Designed by TEAM 2-7</p> */}
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;

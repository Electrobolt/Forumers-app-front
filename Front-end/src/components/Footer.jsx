import React from 'react';
import { social } from '../data';
import styles from '../styleSheets/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.menu} ${styles.centeredMenu}`}>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Token</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Domain</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Agent</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Pricing</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Get Reditus Network</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Contact Us</li></button>
        <button className={`${styles.button} ${styles.noBorder}`}><li>Our team</li></button>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerItem}>
          <ul className={styles['social-icons']}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright &copy; 2024; Designed by TEAM 2-7</p>
      </div>
    </footer>
  );
};

export default Footer;
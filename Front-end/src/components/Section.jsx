import React, { useState } from 'react';
import styles from "../styleSheets/section.module.css";

const Section = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(-1);
  };

  return (
    <div className={styles.body}>
      <section className={styles.sectionTabs}>
        <div className={styles.container}>
          <div className={styles.wrapperTabs}>
            <div className={styles.tabs}>
              <div className={styles.tabsMenu} role="tablist">
                <button
                  className={`${styles.tab} ${styles['tab-container']} ${selectedIndex === 0 ? styles.active : ''}`}
                  onClick={() => handleSelect(0)}
                >
                  <img
                    src="https://www.svgrepo.com/show/521886/time-success.svg"
                    className={styles.imageTabs}
                  />
                  <div className={`${styles.text} max-w-198`}>Time saving</div>
                  {selectedIndex === 0 && (
                    <div className={styles.modalContent} onClick={handleCloseModal}>
                      <h2 className={styles.modalHeader}>Efficient and user friendly</h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${selectedIndex === 1 ? styles.active : ''}`}
                  onClick={() => handleSelect(1)}
                >
                  <img
                    src="https://www.svgrepo.com/show/138058/savings.svg"
                    className={styles.imageTabs}
                  />
                  <div className={`${styles.text} max-w-198`}>Affordable</div>
                  {selectedIndex === 1 && (
                    <div className={styles.modalContent} onClick={handleCloseModal}>
                      <h2 className={styles.modalHeader}>Different prices ranges to satisfy demand</h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${selectedIndex === 2 ? styles.active : ''}`}
                  onClick={() => handleSelect(2)}
                >
                  <img
                    src="https://www.svgrepo.com/show/529052/lock-password.svg"
                    className={styles.imageTabs}
                  />
                  <div className={`${styles.text} `}>Securised</div>
                  {selectedIndex === 2 && (
                    <div className={styles.modalContent} onClick={handleCloseModal}>
                      <h2 className={styles.modalHeader}>Protected data and authentification</h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${selectedIndex === 3 ? styles.active : ''}`}
                  onClick={() => handleSelect(3)}
                >
                  <img
                    src="https://www.svgrepo.com/show/503359/github.svg"
                    className={styles.imageTabs}
                  />
                  <div className={`${styles.text} max-w-198`}>GitHub</div>
                  {selectedIndex === 3 && (
                    <div className={styles.modalContent} onClick={handleCloseModal}>
                      <h2 className={styles.modalHeader}>Available on GitHub</h2>
                    </div>
                  )}
                </button>
              </div>
              <div className={`${styles.highlight} ${selectedIndex !== -1 ? styles[`highlight-${selectedIndex}`] : ''}`}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.imageSection}>
        <div className="wrapper-latest">
          <div className="top-latest">
            <h1>Future updates </h1>
          </div>
          <div className={styles.updateBoxes}>
            <div className={styles.updateBox}>
            <img
                src="https://www.svgrepo.com/show/416769/basic-attention-bat-coin.svg"
                className={styles.latestImage}
            />
              <h2 className={styles.updateBoxHeader}>Token</h2>
              <p className={styles.updateBoxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, justo eu efficitur tincidunt, quam orci ultricies purus, ut feugiat lectus tellus at elit.</p>
            </div>
            <div className={styles.updateBox}>
            <img
               src="https://www.svgrepo.com/show/390702/files-folder-document-file.svg"
               className={styles.latestImage}
            />
              <h2 className={styles.updateBoxHeader}>Domain</h2>
              <p className={styles.updateBoxText}>Il implémente la logique DNS permettant d’assigner un sous-domaine à un agent à la 
demande. Il répond à la question de savoir comment faire correspondre une adresse 
publique et un serveur locale.</p>
            </div>
            <div className={styles.updateBox}>
            <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/411837/collaborate.svg"
                    alt=""
                    className={styles.latestImage}
                  />
              <h2 className={styles.updateBoxHeader}>Agent</h2>
              <p className={styles.updateBoxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, justo eu efficitur tincidunt, quam orci ultricies purus, ut feugiat lectus tellus at elit.</p>
            </div>
          </div>
        </div>
        <img
          className={styles['sectionImage']}
          loading="lazy"
          src="https://www.leisurejobs.com/getasset/c0bb5231-60be-4b88-bc77-4319719fa2e9/"
          alt="Section Image"
        />
      </section>
    </div>
  );
};

export default Section;
import React, { useState } from "react";
import styles from "../styleSheets/section.module.css";
import { FaGithub } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineSavings } from "react-icons/md";
import { TbClockStar } from "react-icons/tb";



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
                  className={`${styles.tab} ${styles["tab-container"]} ${
                    selectedIndex === 0 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(0)}
                  onMouseOut={handleCloseModal}
                >
                  <TbClockStar className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>Time saving</div>
                  {selectedIndex === 0 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Efficient and user friendly
                      </h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${
                    selectedIndex === 1 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(1)}
                  onMouseOut={handleCloseModal}
                >
                  <MdOutlineSavings className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>Affordable</div>
                  {selectedIndex === 1 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Different prices ranges to satisfy demand
                      </h2>
                    </div>
                  )}
                </button>
                <button
                  className={`${styles.tab} ${
                    selectedIndex === 2 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(2)}
                  onMouseOut={handleCloseModal}
                >
                  <RiLockPasswordLine className={styles.imageTabs} />
                  <div className={`${styles.text} `}>Securised</div>
                  {selectedIndex === 2 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Protected data and authentification
                      </h2>
                    </div>
                  )}
                </button>
                {/* <button
                  className={`${styles.tab} ${
                    selectedIndex === 3 ? styles.active : ""
                  }`}
                  onMouseOver={() => handleSelect(3)}
                  onMouseOut={handleCloseModal}
                >
                  <FaGithub className={styles.imageTabs} />
                  <div className={`${styles.text} max-w-198`}>GitHub</div>
                  {selectedIndex === 3 && (
                    <div className={styles.modalContent}>
                      <h2 className={styles.modalHeader}>
                        Available on GitHub
                      </h2>
                    </div>
                  )}
                </button> */}
              </div>
              <div
                className={`${styles.highlight} ${
                  selectedIndex !== -1
                    ? styles[`highlight-${selectedIndex}`]
                    : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="wrapper-latest">
          <div className="top-latest">
            <h1>Some features </h1>
          </div>
          <div className={styles.updateBoxes}>
            <div className={styles.updateBox}>
              <img
                src="https://www.svgrepo.com/show/416769/basic-attention-bat-coin.svg"
                className={styles.latestImage}
              />
              <h3 className={styles.updateBoxHeader}>
    Simplified Forum Management with Our Platform
  </h3>
  <p className={styles.updateBoxText}>
    Unlock the potential of your online community with our SaaS solution that delivers optimal performance. Enjoy instant setup with no configuration required, allowing you to focus on engaging with your users without the need for hardware investment.
  </p>
</div>
<div className={styles.updateBox}>
  <img
    src="https://www.svgrepo.com/show/390702/files-folder-document-file.svg"
    className={styles.latestImage}
  />
  <h2 className={styles.updateBoxHeader}>
    Decentralized Access to Your Forum Anytime
  </h2>
  <p className={styles.updateBoxText}>
    Achieve global connectivity for your forum without the hassle of complex configurations or hardware management. Our extensive network allows you to provide a seamless experience for your users, ensuring high availability and engagement.
  </p>
</div>
<div className={styles.updateBox}>
  <img
    loading="lazy"
    src="https://www.svgrepo.com/show/411837/collaborate.svg"
    alt=""
    className={styles.latestImage}
  />
  <h2 className={styles.updateBoxHeader}>
    Secure Platform for Modern Forum Applications
  </h2>
  <p className={styles.updateBoxText}>
    Elevate your forum and user interactions with our secure access service powered by an international network. Experience the simplicity of an all-in-one SaaS solution that offers uncompromising performance, free from complex configurations and expensive hardware dependencies.
  </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;

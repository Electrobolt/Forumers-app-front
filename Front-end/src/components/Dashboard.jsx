import React, { useRef, useEffect } from "react";
import { navLinks } from "../libs/data";
import styles from "../styleSheets/dashboard.module.css";
import { dashboardData } from "../libs/data";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import LogoutButton from "./buttons/LogoutButton";

const Dashboard = () => {
  const logo="";
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["dashboard-user"]}>
        <img src={logo} width={30} className={styles["dashboard-user-img"]} />{" "}
        Cédric DADA
        <FaChevronDown />
      </div>
      {dashboardData.map((item, index) => (
        <div key={index} className={styles["dashboard-block"]}>
          <p className={styles["dashboard-titles"]}>
            {item.icon} {item.title} <FaChevronDown size={15} />
          </p>
          <div className={styles["dashboard-items"]}>
            {item.listItems.map((option, optionIndex) => (
              <Link
                key={optionIndex}
                value={option}
                className={styles["dashboard-link"]}
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <LogoutButton />
    </div>
  );
};

export default Dashboard;

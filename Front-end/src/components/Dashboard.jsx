import { useState } from "react";
import styles from "../styleSheets/dashboard.module.css";
import { dashboardData } from "../libs/data";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import LogoutButton from "./buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const [display, setDisplay] = useState(
    Array(dashboardData.length + 1).fill(false)
  );
  const newState = [...display];
  const handleClick = (id) => {
    newState[id] = !newState[id];
    setDisplay(newState);
  };
  const { user } = useAuth0();
  const { picture, name, nickname, email } = user;
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["dashboard-user"]}>
        <img
          src={picture}
          width={30}
          className={styles["dashboard-user-img"]}
        />
        <h4>{nickname}</h4>
      </div>
      {dashboardData.map((item, index) => {
        const { id, title, icon, listItems } = item;
        return (
          <div key={index}>
            <div className={styles["dashboard-block"]}>
              <div className={styles["icon-and-title"]}>
                <span
                  className={styles["dashboard-titles"]}
                  onClick={() => handleClick(id)}
                >
                  {icon}
                </span>
                <span
                  className={styles["dashboard-titles"]}
                  onClick={() => handleClick(id)}
                >
                  {title}
                </span>
              </div>
              {display[id] ? (
                <FaChevronDown
                  className={`${styles["chevron"]}`}
                  onClick={() => handleClick(id)}
                />
              ) : (
                <FaChevronRight
                  className={`${styles["chevron"]}`}
                  onClick={() => handleClick(id)}
                />
              )}
            </div>
            {display[id] ? (
              <div className={styles["dashboard-items"]}>
                {listItems.map((option, optionIndex) => {
                  const { title, link } = option;
                  return (
                    <NavLink
                      key={optionIndex}
                      value={option}
                      className={({ isActive, isPending }) => {
                        return (isActive
                          ? styles["dashboard-active-link"]+" "+styles["dashboard-link"]
                          : isPending
                          ? styles["dashboard-active-link"]+" "+styles["dashboard-link"]
                          : styles["dashboard-link"]);
                      }}
                      // className={`${styles["dashboard-link"]} ${console.log(
                      //   styles[
                      //     ({ isActive, isPending }) =>
                      //       isActive
                      //         ? "dashboard-active-link"
                      //         : isPending
                      //         ? "dashboard-active-link"
                      //         : ""
                      //   ]
                      // )}`}
                      to={link}
                    >
                      {title}
                    </NavLink>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <LogoutButton />
    </div>
  );
};

export default Dashboard;

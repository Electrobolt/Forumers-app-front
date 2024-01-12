import { useState } from "react";
import styles from "../styleSheets/dashboard.module.css";
import { dashboardData } from "../libs/data";
import { Link } from "react-router-dom";
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
  console.log(display);
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["dashboard-user"]}>
        <img
          src={picture}
          width={30}
          className={styles["dashboard-user-img"]}
        />
        <h4>{nickname}</h4>
        <FaChevronRight />
        {/* <FaChevronDown /> */}
      </div>
      {dashboardData.map((item, index) => {
        const { id, title, icon, listItems } = item;
        console.log(display);
        return <div key={index} className={styles["dashboard-block"]}>
          <p className={styles["dashboard-titles"]}>
            {icon} {title}
            <FaChevronRight onClick={() => handleClick(id)} />
          </p>
          {display[id] ? (
            <div className={`${styles["dashboard-items"]}}`}>
              {listItems.map((option, optionIndex) => (
                <Link
                  key={optionIndex}
                  value={option}
                  className={styles["dashboard-link"]}
                >
                  {option}
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>;
      })}
      <LogoutButton />
    </div>
  );
};

export default Dashboard;

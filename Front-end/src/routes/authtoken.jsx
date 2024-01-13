import styles from "../styleSheets/token-page.module.css";
import socket from "../libs/connectionConfig";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  let data;
  socket.on("connect", () => {
    console.log("Connected to the server");
  });
  socket.timeout(10000).emit("front", { message: "get-tokens-list" }, (response) => {
    data = response.data;
  });
  return data;
};
const Authtoken = () => {
  const tokens = useLoaderData();
  return (
    <div className={styles["container"]}>
      <h1>Vos tokens</h1>
      <ul className={styles["token-list"]}>
      {tokens.map((token,index)=>{
        <li>
          <div className={styles["token-info"]}>
            <span>{token.name}</span>
          </div>
          <div className={styles["token-actions"]}>
            <button>Voir</button>
            <button>Renouveler</button>
            <button>Supprimer</button>
          </div>
        </li>
      })}
        <li>
          <div className={styles["token-info"]}>
            <img src="token-icon.png" alt="Token Icon" />
            <span>Token #2</span>
          </div>
          <div className={styles["token-actions"]}>
            <button>Voir</button>
            <button>Renouveler</button>
            <button>Supprimer</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Authtoken;

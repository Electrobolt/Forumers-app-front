import { Link, useLoaderData } from "react-router-dom";
import styles from "../styleSheets/agent-list.module.css";
import { io } from "socket.io-client";
import socket from "../libs/connectionConfig";

export const loader = async () => {
  let data;
  socket.on("connect", () => {
    console.log("Connected to the server");
  });
  socket.timeout(10000).emit("front", { message: "get-agent-list" }, (response) => {
    data = response.data;
  });
  return data;
};
const AgentList = () => {
  const agents = useLoaderData();
  return (
    <div className={styles["container"]}>
      <h1>Instances des Applications</h1>
      <table className={styles["tunnel-list"]}>
        <thead>
          <tr>
            <th>Nom de l'Instance</th>
            <th>Adresse Locale</th>
            <th>Adresse Publique</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => {
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.address}</td>
              <td>
                <Link to={agent.link} target="_blank">
                  {agent.link}
                </Link>
              </td>
              <td>
                <span
                  className={styles["status-indicator status-online"]}
                ></span>
                {agent.status}
              </td>
            </tr>;
          })}
          {/* 
      <tr>
        <td>Mon API</td>
        <td>localhost:3000</td>
        <td><Link to="http://api.exemple.maxrock.com" target="_blank">http://api.exemple.maxrock.com</Link></td>
        <td><span className={styles["status-indicator status-offline"]}></span> Hors ligne</td>
      </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default AgentList;

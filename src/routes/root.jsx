import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
// import background from "../images/voiture.jpeg";

const MainPage = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    // <main style={{backgroundImage: `url("${background}")`}}>
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainPage;

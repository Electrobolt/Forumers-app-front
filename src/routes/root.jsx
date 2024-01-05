import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body"

// import background from "../images/voiture.jpeg";

const MainPage = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    // <main style={{backgroundImage: `url("${background}")`}}>
    <div>
      <Navbar />
      <Outlet />
      <Body />
      <Footer />
    </div>
  );
};

export default MainPage;

import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Profile from "../components/userProfile";
import Section from "../components/Section";
import Dashboard from "../components/Dashboard";

// import background from "../images/voiture.jpeg";

const MainPage = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    // <main style={{backgroundImage: `url("${background}")`}}>
    <div>
      <Dashboard />
      <Navbar />
      <Body />
      <Profile />
      <Section />
      <Footer />
      <Outlet />
    </div>
  );
};

export default MainPage;

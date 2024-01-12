import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import Section from "../components/Section";

// import background from "../images/voiture.jpeg";

const MainPage = () => {
  const { openSidebar, openModal } = useGlobalContext();
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  return (
    // <main style={{backgroundImage: `url("${background}")`}}>
    <div className="main">
      {!isAuthenticated && (
        <>
          <Navbar />
          {location.pathname == "/" ? (
            <>
              <Body />
              <Section />
            </>
          ) : (
            ""
          )}
        </>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;

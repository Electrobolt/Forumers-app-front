import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { sidebarData, social } from '../data'
import logo from '../logo.png'
import Sidebar from '../components/Sidebar'

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars onClick={() => setDisplay(!display)} />
        </button>
      </div>
     <Sidebar display={display}/>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}

      </ul>
    </div>
  </nav>
}

export default Navbar

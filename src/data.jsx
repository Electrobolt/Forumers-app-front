import {FaHome} from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'


const sidebarData = [
  { 
    id:1,
    link: "/main",
    text:"Home",
    icon: <FaHome />,
},
{ 
    id:2,
    link: "/about",
    text:"About"
    
},
{ 
    id:3,
    link: "/news",
    text:"News"
  },
];

const loginLinks = [
    { 
      link: "/news",
      icon: <FaGithub />,
      text:"Log in with GitHub"
    },
    { 
      link: "/news",
      icon: <FcGoogle />,
      text:"Log in with Google"
    }
]
const signupLinks = [
    { 
      link: "/news",
      icon: <FaGithub />,
      text:"Sign up with GitHub"
    },
    { 
      link: "/news",
      icon: <FcGoogle />,
      text:"Sign up with Google"
    }
]

const navLinks = [
  {
    url:'/Token',
    text:"Token"
  },
  {
    url:'/Domain',
    text:"Domain"
  },
  {
    url:'/Agent',
    text:"Agent"
  },
  {
    url:'/Facturation',
    text:"Facturation"
  },
  {
    url:'/get-reditus-network',
    text:"Get reditus network"
  }
]
const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  
]

const logins = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  
]

export {social,navLinks,signupLinks,loginLinks,sidebarData}
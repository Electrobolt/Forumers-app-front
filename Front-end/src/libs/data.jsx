import {FaHome} from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaRocket, FaEye, FaGlobe} from 'react-icons/fa'

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
    id:1,
    url:'/platform',
    text:"platform"
  },
  {
    id:2,
    url:'/Usecases',
    text:"usecases"
  },
  {
    id:3,
    url:'/pricing',
    text:"pricing"
  },
  {
    id:4,
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
const dashboardData = [
  {
    title: "Getting Started",
    icon: <FaRocket/>,
    listItems: ["Setup & Installation", "Your Authtoken"]
  },
  {
    title: "Cloud Edge",
    icon: <FaGlobe/>,
    listItems: ["Endpoints", "Edges", "Domains", "TCP Adresses"]
  },
  {
    title: "Tunnels",
    icon:<FaEye/>,
    listItems: ["Agents", "Authtokens", "SSH Public Keys", "Ingress"]
  },
  {
    title: "Observability",
    icon:<FaEye/>,
    listItems: ["Events"]
  }
]
const authentificationData = {
  domain:"dev-aq870nmf2gqi3ezg.us.auth0.com",
  clientId:"u8FldhV3ZM2BCUxpe7ljnYxVmv0mRCTZ",
  redirect_uri:"http://localhost:5173"

}
export {social,navLinks,signupLinks,loginLinks,sidebarData, dashboardData, authentificationData}
import {FaHome} from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaGlobe} from 'react-icons/fa'
import { TbTransferIn } from "react-icons/tb";
import { IoMdRocket } from "react-icons/io";

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
    url:'/',
    text:"Welcome"
  },
  {
    id:2,
    url:'/about',
    text:"Documentation"
  },
  {
    id:3,
    url:'/pricing',
    text:"pricing"
  },
  {
    id:4,
    url:'/download',
    text:"Get your Forum"
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
    id:1,
    title: "Getting Started",
    icon: <IoMdRocket />,
    listItems: [{title:"Setup & Installation",
  link:"/account/download"}, {title:"Your Keys",link:"/account/keys"}]
  },
  {
    id:2,
    title: "Groups",
    icon:<TbTransferIn />,
    listItems: [{title:"Forums",link:"/account/forums"},{title:"Forums",link:"/account/Communities"}]
  },
  
]

const authentificationData = {
  domain:"dev-aq870nmf2gqi3ezg.us.auth0.com",
  clientId:"u8FldhV3ZM2BCUxpe7ljnYxVmv0mRCTZ",
  redirect_uri:"http://localhost:5173"

}
export {social,navLinks,signupLinks,loginLinks, dashboardData, authentificationData}

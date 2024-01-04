import React, { useRef, useEffect } from 'react'
import { navLinks } from '../data'
import styles from "../styleSheets/navbar.module.css"

const Sidebar = ({ display }) => {
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linksHeight);
        if(display){
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [display])
    return (
        <div className={styles['links-container']} ref={linksContainerRef}>
            <ul className={styles["links"]} ref={linksRef}>
                {
                    navLinks.map((link,index) => {
                        const { id, url, text } = link;
                        return <li key={index}>
                            <a href={link.url}>
                                {text}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>)
}

export default Sidebar
/**
    * @description      : 
    * @author           : EUROPEONLINE
    * @group            : 
    * @created          : 05/01/2024 - 14:13:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/01/2024
    * - Author          : EUROPEONLINE
    * - Modification    : 
**/
import React, { useRef, useEffect } from 'react'
import { navLinks } from '../data'
import styles from "../styleSheets/dashboard.module.css"
import { DashboardData } from '../data'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import logo from '../images/voiture.jpeg'

const Dashboard = ()=>{
        return (
            <div className={styles['dashboard-container']}>
              <div className={styles['dashboard-user']}>
                <img src={logo} width={30} className={styles['dashboard-user-img']}/>  Cédric DADA<FaChevronDown/>
              </div>
              {DashboardData.map((item, index) => (
                <div key={index} className={styles['dashboard-block']}>
                  <p className={styles['dashboard-titles']}>{item.icon}   {item.title} <FaChevronDown size={15}/></p>
                  <div className={styles['dashboard-items']}>
                    {item.listItems.map((option, optionIndex) => (
                      <Link key={optionIndex} value={option} className={styles['dashboard-link']}>{option}</Link>
                      ))} 
                  </div>
                </div>
              ))}
            </div>
          );
}

export default Dashboard
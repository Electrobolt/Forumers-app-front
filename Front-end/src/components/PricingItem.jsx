import React, { useRef, useEffect } from 'react'
import { navLinks } from '../data'
import styles from "../styleSheets/pricing.module.css"
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import logo from '../images/voiture.jpeg'
import orange from '../images/orange.jpg'
import momo from '../images/momo.jpg'

const PricingItem = ({type, text, content_button})=>{
        return (
            <div className={styles['pricing-item']}>
              <h3 className={styles['pricing-item-title']}>{type}</h3>
              <p className={styles['pricing-item-text']}>{text}</p>
              <div className={styles['pricing-button-container']}>
                <button className={styles['pricing-button']}>{content_button}</button>
                <div className={styles['payment-buttons-container']}>
                    <img src={orange} className={styles['payment-buttons']}/>
                    <img src={momo} className={styles['payment-buttons']}/>
                </div>
              </div>
            </div>
          );
}

export default PricingItem
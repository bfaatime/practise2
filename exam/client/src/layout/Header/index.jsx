import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { CiShoppingBasket } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.logo}>
         <h1>TASTY</h1>
          </div>
          
         <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add</NavLink>
            </li>
            <li>
              <NavLink to="/reservation">Reservation</NavLink>
            </li>
            <div className={styles.icons}>
            <li>
              <NavLink to="/basket"><CiShoppingBasket /></NavLink>
            </li>
            <li>
              <NavLink to="/favorites"><MdFavoriteBorder />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login"><IoPersonOutline />
              </NavLink>
            </li>
            </div>
            
          </ul>
         </nav>
         
        </div>
      </div>
     
    </header>
  )
}

export default Header
import React from 'react'
import styles from "./index.module.scss"
import { NavLink } from 'react-router-dom'

const Reservation = () => {
  return (
  <div>
     <div className={styles.reservation}>
        <h1>MAKE A RESERVATION</h1>

    <img className={styles.reserve} src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="" />
   </div>
   <div className={styles.form}>
   <form action="reservetion">
    <label htmlFor="Name">Name</label>
    <br />
    <input type="text" placeholder='Your Surname'/>
    <br />
    <label htmlFor="Surname">Surname</label>
    <br />
    <input type="text" placeholder='Your Surname'/>
    <br />
    <label htmlFor="Phone">Phone</label>
    <br />
    <input type="text" placeholder='Phone'/>
    <br />
    <label htmlFor="Email">E-mail</label>
    <br />
    <input type="text" placeholder='E-mail'/>
    <br />
    <label htmlFor="Number">Person</label>
    <br />
    <input type="Number" placeholder='Person'/>
    <br />
    <button><NavLink to="/MENU">RESERVED COMPLETE</NavLink></button>
   </form>
   </div>
  </div>
  )
}

export default Reservation
import React from 'react'
import styles from "./index.module.scss"

const Home = () => {
  return (
    <div className={styles.container}>
         <img className={styles.imag} src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="#" />
         <div className={styles.title}>
         <p>Home Reservation</p>
         <a href="/reservation">Make a Reservation</a>
         </div>
    </div>
  )
}

export default Home
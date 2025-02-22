import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <div>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default MainLayout
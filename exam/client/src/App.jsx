import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Add from './pages/Add'
import Login from './pages/Login'
import Favorites from './pages/Favorites'
import NotFound from './components/NotFound'
import Basket from './pages/Basket'
import Reservation from './pages/Reservation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
    <Route  path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
    <Route path="/basket" element={<Basket/>}/>
    <Route path="/reservation" element={<Reservation/>}/>
    
    </Route>
      
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

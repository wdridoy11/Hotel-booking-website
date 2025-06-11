import React from 'react'
import Herader from '../Components/Header/Herader'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Herader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main
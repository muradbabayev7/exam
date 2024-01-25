import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot
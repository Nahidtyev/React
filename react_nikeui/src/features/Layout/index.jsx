import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./layout.scss"

const Layout = ({children}) => {
  return (
    <div id='layout'>
        <Navbar/>
           <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
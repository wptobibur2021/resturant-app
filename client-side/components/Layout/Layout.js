import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout
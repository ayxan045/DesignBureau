import React from 'react'
import Header from '../components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTopBtn from '../components/ScrollToTopBtn/ScrollToTopBtn'

function Layout() {

  const location = useLocation();

  const blackHeaderPaths  = ["/services","/news","/newsdetails"];
  const isBlackHeader = blackHeaderPaths.includes(location.pathname)
  return (
    <>
        <Header isBlack={isBlackHeader} />
        <main style={{margin: "100px 0"}}>
            <Outlet/>
        </main>
        <ScrollToTopBtn/>
    </>
  )
}

export default Layout
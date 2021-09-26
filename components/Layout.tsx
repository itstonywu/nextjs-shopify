import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout

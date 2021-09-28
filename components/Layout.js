import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout

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
      <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout

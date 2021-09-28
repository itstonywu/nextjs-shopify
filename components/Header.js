import React from 'react'

function Header({ children }) {
  return (
    <header className="px-4 mx-auto max-w-7xl sm:px-6lg:px-8">
      {children}
    </header>
  )
}

export default Header

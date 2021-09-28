import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="flex items-center justify-between h-32">
      <Link href="/">
        <a>
          <h1 className="text-3xl font-bold">Tee Shirt Co.</h1>
        </a>
      </Link>
    </nav>
  )
}

export default Navigation

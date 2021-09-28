import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="flex items-center justify-between h-24 lg:h-32">
      <Link href="/">
        <a>
          <h1 className="text-3xl font-bold uppercase">Big T&apos;s Co.</h1>
        </a>
      </Link>
    </nav>
  )
}

export default Navigation

'use client'

import { Dropdown } from './Dropdown'
import { Logo } from './Logo'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="flex h-auto w-full justify-center bg-[#5b2b84]">
      <nav className="flex h-auto w-full max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-8">
        <Logo />

        <div className="flex items-center gap-4 sm:gap-6">
          <Navigation />

          <Dropdown />
        </div>
      </nav>
    </header>
  )
}

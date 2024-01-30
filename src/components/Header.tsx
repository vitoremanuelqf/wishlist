'use client'

import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import { Dropdown } from './Dropdown'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="flex h-auto w-full justify-center bg-[#5b2b84]">
      <nav className="flex h-auto w-full max-w-7xl items-center justify-between p-3 md:p-5">
        <Logo />

        <div className="flex items-center gap-5 md:gap-8">
          <ul className="flex items-center gap-4">
            <li>
              <Link href={'/wishlist'} legacyBehavior>
                <a className="group flex items-center gap-2 text-base font-medium text-white">
                  <FaRegHeart className="h-5 w-5 text-white group-hover:text-slate-300" />
                  <span className="group-hover:text-slate-300">Wishlist</span>
                </a>
              </Link>
            </li>
          </ul>

          <Dropdown />
        </div>
      </nav>
    </header>
  )
}

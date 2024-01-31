'use client'

import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import { useWishlist } from '~/hooks/useWishlist'

import { Dropdown } from './Dropdown'
import { Logo } from './Logo'

export function Header() {
  const { wishlist } = useWishlist()

  const wishlistLength = wishlist.length

  return (
    <header className="flex h-auto w-full justify-center bg-[#5b2b84]">
      <nav className="flex h-auto w-full max-w-7xl items-center justify-between gap-2 p-3 md:p-5">
        <Logo />

        <div className="flex items-center gap-5 md:gap-8">
          <ul className="flex items-center gap-4">
            <li>
              <Link href={'/wishlist'} legacyBehavior>
                <a className="group relative flex items-center gap-2 text-base font-medium text-white">
                  <FaRegHeart className="h-5 w-5 text-white group-hover:text-slate-300" />
                  <span className="group-hover:text-slate-300">Wishlist</span>

                  {wishlistLength > 0 && (
                    <div className="animate__animated animate__bounceInDown absolute -right-4 -top-2 h-min w-min">
                      <span className=" flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-xs font-bold">
                        {wishlistLength > 9 ? '+9' : wishlistLength}
                      </span>
                    </div>
                  )}
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

'use client'

import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import { useWishlist } from '../../hooks/useWishlist'

export function Navigation() {
  const { wishlist } = useWishlist()

  const wishlistLength = wishlist?.length || 0

  return (
    <ul className="flex items-center">
      <li>
        <Link href={'/wishlist'} legacyBehavior>
          <a className="group relative flex items-center gap-2 text-base font-medium text-white">
            <FaRegHeart className="h-6 w-6 text-white group-hover:text-slate-300" />
            <span className="hidden group-hover:text-slate-300 sm:flex">
              Wishlist
            </span>

            {wishlistLength > 0 && (
              <div className="animate__animated animate__bounceInDown absolute -right-2 -top-2 h-4 w-4 sm:-right-4 sm:-top-2">
                <span className=" flex items-center justify-center rounded-full bg-green-500 text-xs font-bold">
                  {wishlistLength > 9 ? '+9' : wishlistLength}
                </span>
              </div>
            )}
          </a>
        </Link>
      </li>
    </ul>
  )
}

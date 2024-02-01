import { useContext } from 'react'

import { WishlistContext } from '~/contexts/WishlistContext'

export function useWishlist() {
  const context = useContext(WishlistContext)

  return context
}

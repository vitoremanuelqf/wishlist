import { getCookie, setCookie } from 'cookies-next'
import { createContext, useEffect, useState } from 'react'

import { IProduct } from '~/types/product'

interface WishlistContextDataProps {
  wishlist: IProduct[]

  addFavoriteToWishlist: (addFavorite: IProduct) => void
  deleteFavoriteToWishlist: (addFavorite: IProduct) => void
}

interface WishlistContextProviderProps {
  children: React.ReactNode
}

export const WishlistContext = createContext<WishlistContextDataProps>(
  {} as WishlistContextDataProps,
)

export function WishlistContextProvider({
  children,
}: WishlistContextProviderProps) {
  const [wishlist, setWishlist] = useState<IProduct[]>([])

  async function getWishlist() {
    try {
      const storage = getCookie('@netshoes:wishlist')

      const wishlist: IProduct[] = storage ? JSON.parse(storage) : []

      setWishlist(wishlist)
    } catch (error) {
      console.error('Erro ao listar os itens na Wishlist.', error)

      setWishlist([])
    }
  }

  async function addFavoriteToWishlist(addFavorite: IProduct) {
    try {
      const storage = JSON.stringify([...wishlist, addFavorite])

      setCookie('@netshoes:wishlist', storage)

      setWishlist([...wishlist, addFavorite])
    } catch (error) {
      console.error('Não foi possível adicionar o item na Wishlist.', error)

      setWishlist([])
    }
  }

  async function deleteFavoriteToWishlist(deleteFavorite: IProduct) {
    try {
      const storage = wishlist.filter(
        (favorite) => favorite.id !== deleteFavorite.id,
      )

      setCookie('@netshoes:wishlist', storage)

      setWishlist(storage)
    } catch (error) {
      console.error('Não foi possível exluir o item da Wishlist.', error)

      setWishlist([])
    }
  }

  useEffect(() => {
    getWishlist()
  }, [])

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addFavoriteToWishlist,
        deleteFavoriteToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
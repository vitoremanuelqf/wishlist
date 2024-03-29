import { createContext, useEffect, useState } from 'react'

import { IProduct } from '~/types/product'

interface WishlistContextDataProps {
  loading: boolean
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
  const [loading, setLoading] = useState(false)
  const [wishlist, setWishlist] = useState<IProduct[]>([])

  async function getWishlist() {
    setLoading(true)

    try {
      const storage = localStorage.getItem('@netshoes:wishlist')

      const wishlist: IProduct[] = storage ? JSON.parse(storage) : []

      setWishlist(wishlist)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao listar os itens na Wishlist.', error)

      setWishlist([])
      setLoading(false)
    }
  }

  async function addFavoriteToWishlist(addFavorite: IProduct) {
    try {
      const storage = [...wishlist, addFavorite]

      localStorage.setItem('@netshoes:wishlist', JSON.stringify(storage))

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

      localStorage.setItem('@netshoes:wishlist', JSON.stringify(storage))

      setWishlist(storage)
    } catch (error) {
      console.error('Não foi possível exluir o item na Wishlist.', error)

      setWishlist([])
    }
  }

  useEffect(() => {
    getWishlist()
  }, [])

  return (
    <WishlistContext.Provider
      value={{
        loading,
        wishlist,
        addFavoriteToWishlist,
        deleteFavoriteToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

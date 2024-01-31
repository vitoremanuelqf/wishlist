import { AxiosError } from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { createContext, useEffect, useState } from 'react'

import { api } from '~/services/axios'
import { IAPIRoot } from '~/types/api.products'
import { IProduct } from '~/types/product'

interface WishlistContextDataProps {
  products: IProduct[]
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
  const [products, setProducts] = useState<IProduct[]>([])
  const [wishlist, setWishlist] = useState<IProduct[]>([])

  async function getProducts() {
    await api
      .get(`/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d`)
      .then((response) => {
        const data: IAPIRoot = response.data

        const products = data.products.map((item) => {
          const fakeRating = 4
          const fakePrice = 299

          return {
            id: item.product.code,
            alt: item.product.details?.name || '',
            src: item.product?.image || '',
            title: item.product.details.name,
            rating: fakeRating,
            fullPrice: fakePrice,
            finalPrice: fakePrice / 2,
          }
        })

        setProducts(products)
      })
      .catch((error: AxiosError) => {
        console.error('Erro:', error.message)

        setProducts([])
      })
  }

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
    getProducts()
    getWishlist()
  }, [])

  return (
    <WishlistContext.Provider
      value={{
        products,
        wishlist,
        addFavoriteToWishlist,
        deleteFavoriteToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

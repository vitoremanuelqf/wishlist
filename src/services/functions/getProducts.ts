import { AxiosError } from 'axios'

import { api } from '~/services/axios'
import { Root } from '~/types/api.products'
import { Product } from '~/types/product'

export const getProducts = async (): Promise<Product[] | []> => {
  const products = await api
    .get(`/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d`)
    .then((response) => {
      const data: Root = response.data

      const products = data.products.map((item) => {
        const fakeRating = Math.floor(Math.random() * 5) + 1
        const fakePrice = Math.floor(Math.random() * (500 - 100 + 1)) + 100

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

      return products
    })
    .catch((error: AxiosError) => {
      console.error('Erro:', error.message)

      return []
    })

  return products
}

import { AxiosError } from 'axios'

import { api } from '~/services/axios'
import { IAPIRoot } from '~/types/api.products'
import { IProduct } from '~/types/product'

export const getProducts = async (): Promise<IProduct[] | []> => {
  const products = await api
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

      return products
    })
    .catch((error: AxiosError) => {
      console.error('Erro:', error.message)

      return []
    })

  return products
}

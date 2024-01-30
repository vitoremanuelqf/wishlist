'use client'

import { ProductItem } from '~/components/ProductItem'
import { Product } from '~/types/product'

interface ProductListData {
  data: Product[]
}

export function ProductList({ data }: ProductListData) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:px-16 xl:grid-cols-4">
      {data.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  )
}

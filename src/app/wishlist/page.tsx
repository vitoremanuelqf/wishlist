'use client'

import { Breadcrumb } from '~/components/Breadcrumb'
import { Product } from '~/components/Product'
import { useWishlist } from '~/hooks/useWishlist'

export default function Wishlist() {
  const { wishlist } = useWishlist()

  return (
    <div className="flex h-auto w-full max-w-7xl flex-col gap-5 p-3 md:p-5">
      <Breadcrumb routes={['Home', 'Wishlist']} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:px-16 xl:grid-cols-4">
        {wishlist.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

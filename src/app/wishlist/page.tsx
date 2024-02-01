'use client'

import { FiInbox } from 'react-icons/fi'

import { Breadcrumb } from '~/components/Breadcrumb'
import { Product } from '~/components/Product'
import { useWishlist } from '~/hooks/useWishlist'

export default function Wishlist() {
  const { wishlist } = useWishlist()

  return (
    <main className="flex h-auto w-full justify-center bg-white">
      <div className="flex h-auto w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 pb-10 pt-2 sm:gap-4 sm:px-8">
        <Breadcrumb
          routes={[
            { name: 'Home', url: '/' },
            { name: 'Wishlist', url: '/wishlist' },
          ]}
        />

        {wishlist.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {wishlist.map((product) => (
              <Product
                key={product.id}
                data={product}
                productType={'wishlist'}
              />
            ))}
          </div>
        )}

        {wishlist.length <= 0 && (
          <div className="animate__animated animate__zoomIn w=full flex h-auto max-w-96 flex-col items-center justify-center gap-2 py-6 sm:py-8">
            <div className="flex h-min w-min items-center justify-center rounded-full border border-gray-700 bg-[#5b2b84] p-4">
              <FiInbox className="h-12 w-12 text-white" />
            </div>

            <h2 className="text-center text-base font-medium text-gray-700 sm:text-xl">
              Oops! Parece que você não possui nenhum produto em sua lista de
              desejos.
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}

'use client'

import { FiInbox } from 'react-icons/fi'

import { Breadcrumb } from '~/components/Breadcrumb'
import { Product } from '~/components/Product'
import { useWishlist } from '~/hooks/useWishlist'

export default function Wishlist() {
  const { wishlist } = useWishlist()

  return (
    <div className="flex h-auto w-full max-w-7xl flex-col gap-5 p-3 md:p-5">
      <Breadcrumb
        routes={[
          { name: 'Home', url: '/' },
          { name: 'Wishlist', url: '/wishlist' },
        ]}
      />

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:px-16 xl:grid-cols-4">
          {wishlist.map((product) => (
            <Product key={product.id} data={product} productType={'wishlist'} />
          ))}
        </div>
      ) : (
        <div className="animate__animated animate__zoomIn w=full flex h-auto flex-col items-center justify-center gap-5 px-0 py-16 md:px-24">
          <div className="flex h-min w-min items-center justify-center rounded-full border border-gray-700 bg-[#5b2b84] p-4">
            <FiInbox className="h-12 w-12 text-white" />
          </div>

          <h2 className="max-w-[28rem] text-center text-lg font-normal text-gray-700 sm:text-2xl">
            Oops! Parece que você ainda não adicionou nenhum produto à sua lista
            de desejos.
          </h2>
        </div>
      )}
    </div>
  )
}

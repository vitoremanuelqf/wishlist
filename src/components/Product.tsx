'use client'

import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

import { useWishlist } from '~/hooks/useWishlist'
import { IProduct } from '~/types/product'
import { priceFormatter } from '~/utils/priceFormatter'

interface IProductItemProps {
  data: IProduct
  productType: 'home' | 'wishlist'
}

export function Product({ data, productType }: IProductItemProps) {
  const { wishlist } = useWishlist()

  const renderRating = Array.from({ length: 5 }, (_, index) => index + 1)

  const { addFavoriteToWishlist, deleteFavoriteToWishlist } = useWishlist()

  const actions = {
    add: () => addFavoriteToWishlist(data),
    remove: () => deleteFavoriteToWishlist(data),
  }

  const actionType =
    wishlist.filter((product) => product.id === data.id).length > 0
      ? 'remove'
      : 'add'

  return (
    <div className="relative flex w-full flex-col gap-0.5 rounded-md border border-gray-300 p-2 shadow-md sm:gap-1 sm:p-3">
      {actionType === 'add' && productType === 'home' && (
        <button
          onClick={actions[actionType]}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-gray-400 shadow-sm transition-all duration-150  hover:h-10 hover:w-10 sm:right-5 sm:top-5 sm:h-9 sm:w-9"
        >
          <FaRegHeart className="h-4 w-4 text-white sm:h-6 sm:w-6" />
        </button>
      )}

      {actionType === 'remove' && productType === 'home' && (
        <button
          onClick={actions[actionType]}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-red-500 shadow-sm transition-all duration-150  hover:h-10 hover:w-10 sm:right-5 sm:top-5 sm:h-9 sm:w-9"
        >
          <FaRegHeart className="h-4 w-4 text-white sm:h-6 sm:w-6" />
        </button>
      )}

      {actionType === 'remove' && productType === 'wishlist' && (
        <button
          onClick={actions[actionType]}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-gray-400 shadow-sm transition-all duration-150  hover:h-10 hover:w-10 sm:right-5 sm:top-5 sm:h-9 sm:w-9"
        >
          <MdOutlineClose className="h-4 w-4 text-white sm:h-6 sm:w-6" />
        </button>
      )}

      <div className="relative flex aspect-square w-full items-center justify-center rounded-md border border-gray-300">
        <img
          alt={data.alt}
          src={data.src}
          className="absolute bottom-0 left-0 right-0 top-0 aspect-square w-full rounded-md object-contain"
        />
      </div>

      <h2 className="line-clamp-2 block h-16 w-full text-ellipsis align-middle text-sm font-normal text-gray-800 lg:h-14 lg:text-lg">
        {data?.title}
      </h2>

      <div className="flex w-full items-center gap-1">
        {renderRating.map((_, index) =>
          data?.rating && data.rating <= index ? (
            <FaRegStar key={index} className="text-gray-200" />
          ) : (
            <FaStar key={index} className="fill-yellow-400" />
          ),
        )}

        <span className="ml-1 font-medium text-gray-600">{data?.rating}.0</span>
      </div>

      <span className="text-base font-normal text-gray-300 line-through">
        {priceFormatter.format(data?.fullPrice)}
      </span>

      <p className="text-lg font-bold text-[#5b2b84]">
        {priceFormatter.format(data?.finalPrice)}
      </p>
    </div>
  )
}

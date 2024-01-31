'use client'

import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

import { useWishlist } from '~/hooks/useWishlist'
import { IProduct } from '~/types/product'
import { priceFormatter } from '~/utils/priceFormatter'

interface IProductItemProps {
  data: IProduct
}

export function Product({ data }: IProductItemProps) {
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
    <div className="relative flex w-full flex-col gap-1 rounded-md border border-gray-300 p-3 shadow-md">
      <button
        onClick={actions[actionType]}
        className=" absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border  bg-gray-400 shadow-sm transition-all duration-150 hover:h-10 hover:w-10"
      >
        {actionType === 'add' && <FaRegHeart className="h-6 w-6 text-white" />}
        {actionType === 'remove' && (
          <MdOutlineClose className="h-6 w-6 text-white" />
        )}
      </button>

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

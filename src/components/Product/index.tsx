'use client'

import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

import { IProduct } from '~/types/product'

import { useWishlist } from '../../hooks/useWishlist'
import { FavoriteButton } from './FavoriteButton'

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
    wishlist?.filter((product) => product.id === data.id).length > 0
      ? 'remove'
      : 'add'

  return (
    <div className="relative flex h-auto w-full flex-col gap-2 rounded-md border border-gray-300 p-2 shadow-md">
      {actionType === 'add' && productType === 'home' && (
        <FavoriteButton onClick={actions[actionType]}>
          <FaRegHeart className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        </FavoriteButton>
      )}

      {actionType === 'remove' && productType === 'home' && (
        <FavoriteButton onClick={actions[actionType]} active>
          <FaRegHeart className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        </FavoriteButton>
      )}

      {actionType === 'remove' && productType === 'wishlist' && (
        <FavoriteButton onClick={actions[actionType]}>
          <MdOutlineClose className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        </FavoriteButton>
      )}

      <div className="relative flex aspect-square h-auto w-full items-center justify-center rounded-md border border-gray-300">
        <img
          alt={data.alt}
          src={data.src}
          className="absolute bottom-0 left-0 right-0 top-0 aspect-square w-full rounded-md"
        />
      </div>

      <h2 className="line-clamp-2 block w-full text-ellipsis text-sm font-normal text-gray-800 sm:text-base">
        {data?.title}
      </h2>

      <div className="mt-auto flex w-full items-center">
        {renderRating.map((_, index) =>
          data?.rating && data.rating <= index ? (
            <FaRegStar key={index} className="text-gray-200" />
          ) : (
            <FaStar key={index} className="fill-yellow-400" />
          ),
        )}

        <span className="ml-1 font-medium text-gray-600">{data?.rating}.0</span>
      </div>

      <span className="text-sm font-normal text-gray-300 line-through sm:text-base">
        {data?.fullPrice}
      </span>

      <p className="text-base font-bold text-[#5b2b84] sm:text-lg">
        {data?.finalPrice}
      </p>
    </div>
  )
}

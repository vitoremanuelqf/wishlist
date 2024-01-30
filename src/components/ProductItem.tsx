'use client'

import { FaRegStar, FaStar } from 'react-icons/fa'

import { Product } from '~/types/product'
import { priceFormatter } from '~/utils/priceFormatter'

interface ProductItemProps {
  data: Product
}

export function ProductItem({ data }: ProductItemProps) {
  const renderRating = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <div className="flex w-full flex-col gap-1 rounded-md border border-gray-300 p-3 shadow-md">
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

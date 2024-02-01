'use client'

import Link from 'next/link'

interface BreadcrumbProps {
  routes: { name: string; url: string }[]
}

export function Breadcrumb({ routes }: BreadcrumbProps) {
  const lastRoute = routes.length - 1

  return (
    <div className="flex h-auto w-full items-center border-b-[1px] border-b-gray-300 py-2 sm:py-4">
      {routes.map((route, index) => (
        <Link key={index} href={route.url} legacyBehavior>
          <a
            className={`mr-1 text-xl text-[#5b2b84] sm:text-2xl ${lastRoute === index ? 'font-bold' : 'font-normal'}`}
          >
            {route.name}
            {lastRoute > index && ' /'}
          </a>
        </Link>
      ))}
    </div>
  )
}

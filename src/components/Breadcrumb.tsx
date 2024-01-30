'use client'

interface BreadcrumbProps {
  routes: string[]
}

export function Breadcrumb({ routes }: BreadcrumbProps) {
  const lastRoute = routes.length - 1

  return (
    <div className="flex h-auto w-full items-center border-b-[1px] border-gray-300 py-3 md:py-5">
      {routes.map((route, index) => (
        <p
          key={index}
          className={`mr-1 text-xl text-[#5b2b84] ${lastRoute === index ? 'font-bold' : 'font-normal'}`}
        >
          {route}
          {lastRoute > index && ' /'}
        </p>
      ))}
    </div>
  )
}

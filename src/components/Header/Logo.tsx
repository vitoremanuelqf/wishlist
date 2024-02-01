'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link href={'/'}>
      <img
        alt={'Logo da Netshoes.'}
        src={'/img/png/logo.png'}
        width={4096}
        height={521}
        className="h-6 w-auto object-contain sm:h-8"
      />
    </Link>
  )
}

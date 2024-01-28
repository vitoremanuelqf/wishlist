import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href={'/'}>
      <Image
        alt={'Logo da Netshoes.'}
        src={'/img/png/logo.png'}
        width={4096}
        height={521}
        className="max-h-5 w-auto object-contain md:max-h-8"
      />
    </Link>
  )
}

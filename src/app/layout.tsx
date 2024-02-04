import 'animate.css'
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { AppProvider } from '~/hooks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Teste Frontend fornecido pelo Luiza Labs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>
          <div className="flex h-full min-h-screen w-full flex-col">
            <Header />

            {children}

            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}

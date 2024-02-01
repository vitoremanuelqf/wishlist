'use client'

import { WishlistContextProvider } from '~/contexts/WishlistContext'

interface AppProviderProps {
  children?: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <WishlistContextProvider>{children}</WishlistContextProvider>
}

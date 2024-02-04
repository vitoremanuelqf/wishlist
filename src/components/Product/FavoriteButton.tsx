interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: React.ReactNode
}

export function FavoriteButton({
  active = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${active ? 'bg-red-500' : 'bg-gray-400'} absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition-all duration-150 hover:h-9 hover:w-9 sm:h-9 sm:w-9 sm:hover:h-10 sm:hover:w-10`}
    >
      {children}
    </button>
  )
}

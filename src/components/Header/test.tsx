import { render, screen } from '@testing-library/react'

import { Logo } from './Logo'
import { Navigation } from './Navigation'

jest.mock('../../hooks/useWishlist', () => {
  return {
    useWishlist() {
      return [
        {
          id: '1',
          alt: 'alt',
          src: 'src',
          title: 'Kit Meia Invisível Olympikus C/ 3 Pares Masculina',
          rating: 4,
          fullPrice: 'R$ 100,00',
          finalPrice: 'R$ 50,00',
        },
      ]
    },
  }
})

describe('<Logo />', () => {
  it('should render the logo in the header', () => {
    const { container } = render(<Logo />)

    expect(screen.getByAltText(/Logo da Netshoes/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<Navigation />', () => {
  it('should render the logo in the navigation', () => {
    const { container } = render(<Navigation />)

    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

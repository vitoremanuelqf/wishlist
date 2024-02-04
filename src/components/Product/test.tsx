import { render, screen } from '@testing-library/react'

import { Product } from '.'

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

const productItem = {
  id: '1',
  alt: 'alt',
  src: 'src',
  title: 'Kit Meia Invisível',
  rating: 4,
  fullPrice: 'R$ 100,00',
  finalPrice: 'R$ 50,00',
}

describe('<Product />', () => {
  it('should render the product card on the home page', () => {
    const { container } = render(
      <Product data={productItem} productType={'home'} />,
    )

    expect(screen.getByAltText(/alt/i)).toBeInTheDocument()
    expect(screen.getByText(/Kit Meia Invisível/i)).toBeInTheDocument()
    expect(screen.getByText(/4\.0/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 100,00/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 50,00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the product card in the wishlist', () => {
    const { container } = render(
      <Product data={productItem} productType={'wishlist'} />,
    )

    expect(screen.getByAltText(/alt/i)).toBeInTheDocument()
    expect(screen.getByText(/Kit Meia Invisível/i)).toBeInTheDocument()
    expect(screen.getByText(/4\.0/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 100,00/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 50,00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', {
        name: /Wishlist • 2024 | Todos os direitos reservados/i,
      }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render the copyright message in the footer', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByText(/Wishlist • 2024 | Todos os direitos reservados/i),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

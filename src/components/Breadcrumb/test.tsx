import { render, screen } from '@testing-library/react'

import { Breadcrumb } from '.'

describe('<Breadcrumb />', () => {
  it('should render the correct links', () => {
    const { container } = render(
      <Breadcrumb
        routes={[
          { name: 'Home', url: '/' },
          { name: 'Wishlist', url: '/wishlist' },
        ]}
      />,
    )

    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

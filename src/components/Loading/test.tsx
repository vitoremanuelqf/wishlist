import { render, screen } from '@testing-library/react'

import { Loading } from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    const { container } = render(<Loading />)

    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

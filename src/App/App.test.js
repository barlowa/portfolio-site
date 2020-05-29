import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

describe('Main header', () => {
	const app = render(<App />)
	const header = app.getByTestId('Header')
	const logo = app.getByTestId('Logo')
	it('should render the logo', () => {
		expect(header).toContainElement(logo)
		expect(logo).toHaveClass('logo')
		expect(logo).toContainHTML('<a href="/">Alex Barlow</a>')
	})
})

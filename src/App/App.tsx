import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import React, { useState } from 'react'

import { DefaultTheme, GlobalStyle } from './Themes'
import Header from './Header'
import Routes from '../Pages/Routes'

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	return (
		<Router>
			<ThemeProvider theme={DefaultTheme}>
				<GlobalStyle />
				<Header setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
				<Routes />
			</ThemeProvider>
		</Router>
	)
}

export default App

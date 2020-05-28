import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import React from 'react'

import { DefaultTheme } from './Themes'
import Header from './Header'
import Routes from '../Pages/Routes'

function App() {
	return (
		<Router>
			<ThemeProvider theme={DefaultTheme}>
				<Header />
				<Routes />
			</ThemeProvider>
		</Router>
	)
}

export default App

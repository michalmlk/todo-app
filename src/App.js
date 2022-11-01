import React from 'react'
import Dashboard from './components/templates/Dashboard/Dashboard'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Dashboard />
		</ThemeProvider>
	)
}

export default App

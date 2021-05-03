import 'styled-components'

//add theme props here
declare module 'styled-components' {
	export interface DefaultTheme {
		header: string
		primary: string
		secondary: string
		primaryHighlight: string
		secondaryHighlight: string
		backgroundColour: string
		mobileBreakpoint: string
		tabletBreakpoint: string
		primaryDark: string
	}
}

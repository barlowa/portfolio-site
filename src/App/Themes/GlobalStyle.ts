import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
		'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: ${({ theme: { backgroundColour } }) => backgroundColour};
	font-size: 20px;
}

p {
	margin: 0 0 1em 0;
}
a {
    font-family: consolas-regular;
    color: ${({ theme: { secondary } }) => secondary};
    margin: 0 5px;
}
& a:hover {
    padding: 5px 0;
    background-color: ${({ theme: { secondaryHighlight } }) => secondaryHighlight};
}

`
export default GlobalStyle

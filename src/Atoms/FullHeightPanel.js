import styled from 'styled-components'

export const FullHeightPanel = styled.div`
	min-height: 100vh;
	background-image: url(${({ background }) => (background ? background : '')});
	background-size: cover;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		padding: 40px 0;
	}
`

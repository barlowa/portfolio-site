import styled from 'styled-components'

export const FullHeightPanel = styled.div`
	min-height: 100vh;
	background-image: url(${({ background }) => (background ? background : '')});
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	@media only screen and (max-width: ${({ theme: { mobileBreakpoint } }) => mobileBreakpoint}) {
		background-image: url(${({ mobileBackground }) => (mobileBackground ? mobileBackground : '')});
		padding: 40px 0;
		background-size: contain;
		background-attachment: scroll;
		background-repeat: no-repeat;
		background-color: #badaf3;
		background-position: bottom;
	}
`

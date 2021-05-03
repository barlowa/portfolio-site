import styled from 'styled-components'

export const FullHeightPanel = styled.div<FullHeightPanelProps>`
	min-height: 100vh;
	background-image: url(${({ background }) => (background ? background : '')});
	background-size: 100vw;
	background-attachment: fixed;
	background-position: center;
	background-color: ${({ backgroundColour }) => (backgroundColour ? backgroundColour : '')};
	background-repeat: no-repeat;
	background-position: bottom;
	@media only screen and (max-width: ${({ theme: { mobileBreakpoint } }) => mobileBreakpoint}) {
		background-image: url(${({ mobileBackground }) => (mobileBackground ? mobileBackground : '')});
		padding: 40px 0;
		background-attachment: scroll;
	}
`

interface FullHeightPanelProps {
	background?: string
	mobileBackground?: string
	backgroundColour?: string
}

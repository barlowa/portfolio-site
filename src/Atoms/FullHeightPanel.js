import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FullHeightPanel = styled.div`
	min-height: 100vh;
	background-image: url(${({ background }) => (background ? background : '')});
	background-size: 100vw;
	background-attachment: fixed;
	background-position: center;
	background-color: ${({ backgroundColour }) => backgroundColour};
	background-repeat: no-repeat;
	background-position: bottom;
	@media only screen and (max-width: ${({ theme: { mobileBreakpoint } }) => mobileBreakpoint}) {
		background-image: url(${({ mobileBackground }) => (mobileBackground ? mobileBackground : '')});
		padding: 40px 0;
		background-attachment: scroll;
	}
`
FullHeightPanel.propTypes = {
	background: PropTypes.string,
	mobileBackground: PropTypes.string,
	backgroundColour: PropTypes.string.isRequired,
}

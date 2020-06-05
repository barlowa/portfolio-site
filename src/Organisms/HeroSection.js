import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FullHeightPanel, Gutter, Divider } from '../Atoms'

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-height: 100vh;
`
const HeroSection = ({ background, mobileBackground, backgroundColour, children }) => {
	return (
		<Divider>
			<FullHeightPanel
				background={background}
				mobileBackground={mobileBackground}
				backgroundColour={backgroundColour}
			>
				<Gutter>
					<ContentContainer>{children} </ContentContainer>
				</Gutter>
			</FullHeightPanel>
		</Divider>
	)
}

HeroSection.propTypes = {
	background: PropTypes.string,
	backgroundColour: PropTypes.string,
	children: PropTypes.any.isRequired,
	mobileBackground: PropTypes.string,
}
export default HeroSection

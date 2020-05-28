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
const HeroSection = ({ background, children }) => {
	return (
		<Divider>
			<FullHeightPanel background={background}>
				<Gutter>
					<ContentContainer>{children} </ContentContainer>
				</Gutter>
			</FullHeightPanel>
		</Divider>
	)
}
export default HeroSection

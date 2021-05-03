import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { FullHeightPanel, Gutter } from '../Atoms'

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-height: 100vh;
`
const HeroSection: FC<HeroSectionProps> = ({ background, mobileBackground, backgroundColour, children }) => {
	return (
		<FullHeightPanel
			background={background}
			mobileBackground={mobileBackground}
			backgroundColour={backgroundColour}
		>
			<Gutter>
				<ContentContainer>{children} </ContentContainer>
			</Gutter>
		</FullHeightPanel>
	)
}

interface HeroSectionProps {
	background?: string
	backgroundColour?: string
	mobileBackground?: string
	children: ReactNode
}

export default HeroSection

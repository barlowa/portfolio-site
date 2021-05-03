import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Gutter, InlineImage } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 40px;
	margin-bottom: 40px;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		justify-items: center;
	}
`
const ImageSection: FC<ImageSectionProps> = ({ image, children, title, imageWidth }) => {
	return (
		<Gutter>
			<Layout>
				<InlineImage src={image} width={imageWidth || '250px'} />
				<TextBlock title={title}>{children}</TextBlock>
			</Layout>
		</Gutter>
	)
}

interface ImageSectionProps {
	image?: string
	children: ReactNode
	title?: string
	imageWidth?: string
}
export default ImageSection

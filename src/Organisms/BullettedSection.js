import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Gutter, InlineImage } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 40px;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		justify-items: center;
	}
`
const BullettedSection = ({ image, children, title, imageWidth }) => {
	return (
		<Gutter>
			<Layout>
				<InlineImage src={image} maxWidth={imageWidth} />
				<TextBlock title={title}>{children}</TextBlock>
			</Layout>
		</Gutter>
	)
}
BullettedSection.defaultProps = {
	imageWidth: '250px',
}
BullettedSection.propTypes = {
	children: PropTypes.any.isRequired,
	image: PropTypes.string,
	imageWidth: PropTypes.string,
	title: PropTypes.string,
}

export default BullettedSection

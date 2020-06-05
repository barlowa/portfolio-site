import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Gutter, ListItems } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: block;
	margin: 0 0 40px 0;
`
const BullettedSection = ({ children, title }) => {
	return (
		<Gutter>
			<Layout>
				<TextBlock title={title}>
					<ListItems>{children}</ListItems>
				</TextBlock>
			</Layout>
		</Gutter>
	)
}

BullettedSection.propTypes = {
	children: PropTypes.any.isRequired,
	title: PropTypes.string,
}

export default BullettedSection

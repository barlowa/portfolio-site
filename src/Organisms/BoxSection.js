import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Gutter } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: block;
	margin: 0 0 40px 0;
`
const BoxSection = ({ children, title, id }) => {
	return (
		<Gutter>
			<Layout>
				<TextBlock title={title} id={id}>
					{children}
				</TextBlock>
			</Layout>
		</Gutter>
	)
}

BoxSection.propTypes = {
	children: PropTypes.any.isRequired,
	title: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BoxSection

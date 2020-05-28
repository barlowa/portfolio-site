import React from 'react'
import PropTypes from 'prop-types'
import { Title, Gutter } from '../Atoms'

const Heading = ({ children, id }) => {
	return (
		<Gutter>
			<div id={id}>
				<Title>{children}</Title>
			</div>
		</Gutter>
	)
}

Heading.propTypes = {
	children: PropTypes.string.isRequired,
}

export default Heading

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
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	children: PropTypes.string.isRequired,
}

export default Heading

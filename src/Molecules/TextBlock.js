import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Title } from '../Atoms'

const Wrapper = styled.div`
	/*display: grid;
	grid-template-columns: auto auto;

	 .inline-image-wrapper {
		margin: 0 40px 0 0;
	}
	.text-wrapper {
		margin: 0 0 40px 0;
	}
 */
`

const TextBlock = ({ title, children }) => {
	return (
		<Wrapper>
			{title && <Title>{title}</Title>}
			<div className="text-wrapper">{children}</div>
		</Wrapper>
	)
}

TextBlock.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any.isRequired,
}

export default TextBlock

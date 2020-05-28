import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Button } from '../Atoms'

const InlineButtonWrapper = styled.div`
	display: inline-block;
	margin-right: 40px;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		display: block;
		margin: 40px 0;
	}
`

const InlineButtons = ({ buttons }) => (
	<div>
		{buttons.length
			? buttons.map(({ onClick, label }, index) => (
					<InlineButtonWrapper key={`${label}${index}`}>
						<Button onClick={onClick}>{label}</Button>
					</InlineButtonWrapper>
			  ))
			: null}
	</div>
)

InlineButtons.propTypes = {
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
		})
	).isRequired,
}

export default InlineButtons

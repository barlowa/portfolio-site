import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
	background-color: ${({ theme: { secondary } }) => secondary};
	color: ${({ theme: { secondaryHighlight } }) => secondaryHighlight};
	font-size: 20px;
	font-family: consolas;
	cursor: pointer;
	padding: 15px;
	border-style: none;
	min-width: 250px;
`

const Button = ({ onClick, children }) => {
	return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
}

export default Button

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export const StyledBurger = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	-webkit-tap-highlight-color: transparent;

	&:focus {
		outline: none;
	}

	.burger-size {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 25px;
		height: 15px;
	}
	.bun {
		width: 25px;
		height: 3px;
		background: ${({ theme, isOpen }) => (isOpen ? theme.secondary : theme.primary)};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: bottom;

		:first-child {
			transform: ${({ isOpen }) =>
				isOpen ? 'translateX(-1px) translateY(8px) rotate(45deg)' : 'rotate(0)'};
		}

		:nth-child(2) {
			transform: ${({ isOpen }) =>
				isOpen ? 'translateX(1px) translateY(1px) rotate(-45deg)' : 'rotate(0)'};
		}
	}
`

const Burger = ({ isOpen, setIsOpen }) => (
	<StyledBurger className="burger" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
		<div className="burger-size">
			<div className="bun" />
			<div className="bun" />
		</div>
	</StyledBurger>
)
StyledBurger.propTypes = {
	isOpen: PropTypes.bool.isRequired,
}
Burger.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
}
export default Burger

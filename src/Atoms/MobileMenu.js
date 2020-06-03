import React from 'react'
import styled from 'styled-components'

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme: { header } }) => header};
	height: 100vh;
	text-align: left;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

	@media (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		width: 100%;
	}

	a {
		font-size: 2rem;
		padding: 2rem 0;
		letter-spacing: 3px;
		color: ${({ theme }) => theme.primaryDark};
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			padding: 2rem 0;
			color: ${({ theme: { primary } }) => primary};
		}
	}
`
const MobileMenu = ({ isOpen, children }) => <StyledMenu isOpen={isOpen}>{children}</StyledMenu>

export default MobileMenu

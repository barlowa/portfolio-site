import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

import { Gutter, MobileMenu, Burger } from '../Atoms'
import Links from './Links'

const StyledHeaderWrapper = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	background-color: ${({ theme: { header } }) => header};
	padding: 15px 0;
	border-bottom: 2px solid ${({ theme: { secondaryHighlight } }) => secondaryHighlight};

	.position-items {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.logo {
		font-size: 30px;
		a {
			text-decoration: none;
			color: ${({ theme: { primary } }) => primary};
		}
		& a:hover {
			padding: 5px;
			background-color: ${({ theme: { primaryHighlight } }) => primaryHighlight};
		}
	}
	.desktop-navigation {
		margin-top: 5px;
		a {
			transition: color 0.3s linear;
			text-decoration: none;
			margin: 0 15px;
		}
	}
	.mobile-navigation {
		display: none;
	}

	/* hides desktop menu and shows mobile menu */
	@media (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		.position-items {
			justify-content: space-between;
			flex-direction: row;
		}
		.desktop-navigation {
			display: none;
		}
		.mobile-navigation {
			display: block;
		}
	}
`

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	return (
		<StyledHeaderWrapper data-testid="Header">
			<Gutter>
				<div className="position-items">
					<div data-testid="Logo" className="logo">
						<Link to="/">Alex Barlow</Link>
					</div>
					<div className="desktop-navigation">
						<Links />
					</div>
					<div className="mobile-navigation">
						<Burger isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
						<MobileMenu isOpen={isMobileMenuOpen}>
							<Links setIsOpen={setIsMobileMenuOpen} />
						</MobileMenu>
					</div>
				</div>
			</Gutter>
		</StyledHeaderWrapper>
	)
}

export default Header

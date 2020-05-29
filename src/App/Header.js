import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Gutter } from '../Atoms'

const StyledHeaderWrapper = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	background-color: ${({ theme: { header } }) => header};
	padding: 15px 0;
	font-family: consolas;

	.positioning {
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
	}
	.navigation {
		margin-top: 5px;
		a {
			color: ${({ theme: { secondary } }) => secondary};
			margin: 0 15px;
		}
	}
`

const Header = () => {
	return (
		<StyledHeaderWrapper data-testid="Header">
			<Gutter>
				<div className="positioning">
					<div data-testid="Logo" className="logo">
						<Link to="/">Alex Barlow</Link>
					</div>
					<div className="navigation">
						<Link to="/#projects">Recent Projects</Link>
						<Link to="/#about">More About Me</Link>
						<Link to="/#uses">/uses</Link>
					</div>
				</div>
			</Gutter>
		</StyledHeaderWrapper>
	)
}

export default Header

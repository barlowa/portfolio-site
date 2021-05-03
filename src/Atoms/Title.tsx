import { FC } from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
	margin: 0 0 40px 0;
	display: flex;
`

const TitleStyle = styled.span`
	background-color: ${({ theme: { primary } }) => primary};
	color: ${({ theme: { primaryHighlight } }) => primaryHighlight};
	font-size: 60px;
	font-family: consolas-bold-italic;
	padding: 5px;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		font-size: 40px;
	}
`

export const Title: FC<TitleProps> = ({ children }) => {
	return (
		<TitleWrapper>
			<TitleStyle>{children}</TitleStyle>
		</TitleWrapper>
	)
}
interface TitleProps {
	children: string
}

export default Title

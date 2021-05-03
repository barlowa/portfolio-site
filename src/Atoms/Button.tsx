import { FC } from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
	background-color: ${({ theme: { secondary } }) => secondary};
	color: ${({ theme: { secondaryHighlight } }) => secondaryHighlight};
	font-size: 20px;
	font-family: consolas-regular;
	cursor: pointer;
	padding: 15px;
	border-style: none;
	min-width: 250px;
`

const Button: FC<ButtonProps> = ({ onClick, children }) => {
	return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
}

interface ButtonProps {
	onClick: () => void
	children: string | number
}

export default Button

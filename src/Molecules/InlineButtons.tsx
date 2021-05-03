import { FC } from 'react'
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

const InlineButtons: FC<InlineButtonProps> = ({ buttons }) => (
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

interface InlineButtonProps {
	buttons: { label: string; onClick: () => void }[]
}

export default InlineButtons

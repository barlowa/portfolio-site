import styled from 'styled-components'

export const Divider = styled.div`
	margin: 0 0 160px 0;
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		margin: 0 0 80px 0;
	}
`

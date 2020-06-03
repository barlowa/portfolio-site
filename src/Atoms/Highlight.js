import styled from 'styled-components'

export const Highlight = styled.span`
	/* color: ${({ theme: { secondary } }) => secondary}; */
	background-color: ${({ theme: { secondaryHighlight } }) => secondaryHighlight};
	padding: 5px;
	margin-right: 5px;
	font-weight: 600;
	/* font-style: italic; */
`

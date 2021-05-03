import styled from 'styled-components'

export const ListItems = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	line-height: 1.5;
	> li {
		padding: 0 0 20px 0;
		&::before {
			content: '◀';
			margin: 0 10px 0 0;
			color: ${({ theme: { secondary } }) => secondary};
		}
	}
`

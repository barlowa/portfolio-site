import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Title } from '../Atoms'

const Wrapper = styled.div`
	/*display: grid;
	grid-template-columns: auto auto;

	 .inline-image-wrapper {
		margin: 0 40px 0 0;
	}
	.text-wrapper {
		margin: 0 0 40px 0;
	}
 */
`

const TextBlock: FC<TextBlockProps> = ({ title, children }) => {
	return (
		<Wrapper>
			{title && <Title>{title}</Title>}
			<div className="text-wrapper">{children}</div>
		</Wrapper>
	)
}

interface TextBlockProps {
	title?: string
	children: ReactNode
}

export default TextBlock

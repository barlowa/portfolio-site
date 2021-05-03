import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Gutter } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: block;
	margin: 0 0 40px 0;
`
const BoxSection: FC<BoxSectionProps> = ({ children, title }) => {
	return (
		<Gutter>
			<Layout>
				<TextBlock title={title}>{children}</TextBlock>
			</Layout>
		</Gutter>
	)
}

interface BoxSectionProps {
	children: ReactNode
	title: string
	// id: string
}

export default BoxSection

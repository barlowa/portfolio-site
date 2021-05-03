import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Gutter, ListItems } from '../Atoms'
import { TextBlock } from '../Molecules'

const Layout = styled.div`
	display: block;
	margin: 0 0 20px 0;
`
const BullettedSection: FC<BullettedSectionProps> = ({ children, title }) => {
	return (
		<Gutter>
			<Layout>
				<TextBlock title={title}>
					<ListItems>{children}</ListItems>
				</TextBlock>
			</Layout>
		</Gutter>
	)
}

interface BullettedSectionProps {
	children: ReactNode
	title?: string
}

export default BullettedSection

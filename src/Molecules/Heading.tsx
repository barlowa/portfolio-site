import { FC } from 'react'
import { Title, Gutter } from '../Atoms'

const Heading: FC<HeadingProps> = ({ children, id }) => {
	return (
		<Gutter>
			<div id={id || undefined}>
				<Title>{children}</Title>
			</div>
		</Gutter>
	)
}
interface HeadingProps {
	id?: string
	children: string
}
export default Heading

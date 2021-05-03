import { FC } from 'react'
import styled from 'styled-components'

const Image = styled.img.attrs(() => ({
	width: '100%',
}))``

const InlineImageContainer = styled.div<InlineImageContainerProps>`
	display: inline-block;
	height: auto;
	max-width: ${({ width }) => width || '500px'};
`
export const InlineImage: FC<InlineImageProps> = ({ width, src, onClick }) => {
	return (
		<InlineImageContainer width={width} onClick={onClick}>
			{src && <Image src={src} />}
		</InlineImageContainer>
	)
}

interface InlineImageContainerProps {
	width?: string
}

interface InlineImageProps {
	width?: string
	src?: string
	onClick?: () => void
}

export default InlineImage

import { FC } from 'react'
import styled from 'styled-components'

const ThumbnailImage = styled.img.attrs(({ height }) => ({
	height,
}))`
	object-fit: contain;
`
const ThumbnailWrapper = styled.div`
	outline: 1px solid ${({ theme: { secondary } }) => secondary};
	display: inline-block;
	margin: 10px 20px 1px 1px;
	padding: 5px;
	height: 100%;
	cursor: pointer;
`
export const Thumbnail: FC<ThumbnailProps> = ({ onClick, height = '150px', src }) => {
	return (
		<ThumbnailWrapper onClick={onClick}>
			<ThumbnailImage src={src} height={height}></ThumbnailImage>
		</ThumbnailWrapper>
	)
}

interface ThumbnailProps {
	onClick: () => void
	src: string
	height: string
}
export default Thumbnail

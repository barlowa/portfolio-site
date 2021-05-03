import { FC } from 'react'
import { Thumbnail } from '../Atoms'
import styled from 'styled-components'
import PictureProps from '../@types/PictureProps'
/* display: flex;
overflow-y: scroll;
width: 100%; */
// -webkit-overflow-scrolling: touch;
/* overflow-scrolling: touch; */

const GalleryWrapper = styled.div`
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	text-align: center;
`
const GalleryFilmStrip: FC<GalleryFilmStropProps> = ({ pictures, thumbnailHeight, onThumbnailClick }) => {
	return (
		<GalleryWrapper>
			{pictures &&
				pictures.map((picture: PictureProps) => (
					<Thumbnail
						key={picture.key}
						src={picture.thumbnail}
						height={thumbnailHeight}
						onClick={() => onThumbnailClick(picture.picture)}
					/>
				))}
		</GalleryWrapper>
	)
}

interface GalleryFilmStropProps {
	onThumbnailClick: (picture: string) => void
	pictures?: PictureProps[]
	thumbnailHeight: string
}

export default GalleryFilmStrip

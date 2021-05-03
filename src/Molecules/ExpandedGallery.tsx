import { FC, useState } from 'react'
import { Modal } from '../Atoms'
import { GalleryFilmStrip } from '.'
import styled from 'styled-components'
import PictureProps from '../@types/PictureProps'

const ScaledImage = styled.img.attrs<ScaledImageProps>(() => ({
	height: '100%',
}))`
	width: 100%;
	height: 100%;
	object-fit: contain;
`

const Layout = styled.div<LayoutProps>`
	display: flex;
	height: calc(100vh - 20px);
	width: calc(100vw - 20px);
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	.preview-picture {
		height: 80vh;
	}
	.gallery {
		width: 90vw;
	}
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		height: 80vh;
		.preview-picture {
			height: 60vh;
		}
	}
`
const ExpandedGallery: FC<ExpandedGalleryProps> = ({ close, pictures, openingPicture, thumbnailHeight }) => {
	const [selectedPicture, setSelectedPicture] = useState<string>()
	return (
		<Modal close={close}>
			<Layout thumbnailHeight={thumbnailHeight}>
				<div className="preview-picture">
					<ScaledImage src={selectedPicture || openingPicture} />
				</div>
				<div className="gallery">
					<GalleryFilmStrip
						pictures={pictures}
						thumbnailHeight={thumbnailHeight}
						onThumbnailClick={(picture) => setSelectedPicture(picture)}
					/>
				</div>
			</Layout>
		</Modal>
	)
}

interface ExpandedGalleryProps {
	close: () => void
	openingPicture: string
	pictures: PictureProps[]
	thumbnailHeight: string
}

interface ScaledImageProps {
	src: string
}

interface LayoutProps {
	thumbnailHeight: string
}

export default ExpandedGallery

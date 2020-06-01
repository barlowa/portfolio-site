import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Atoms'
import { GalleryFilmStrip } from '.'
import styled from 'styled-components'

const ScaledImage = styled.img.attrs(() => ({
	height: '100%',
}))`
	width: 100%;
	height: 100%;
	object-fit: contain;
`

const Layout = styled.div`
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
const ExpandedGallery = ({ close, pictures, openingPicture, thumbnailHeight }) => {
	const [selectedPicture, setSelectedPicture] = useState()
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
						onThumbnailClick={({ picture }) => setSelectedPicture(picture)}
					/>
				</div>
			</Layout>
		</Modal>
	)
}

ExpandedGallery.propTypes = {
	close: PropTypes.func.isRequired,
	openingPicture: PropTypes.string.isRequired,
	pictures: PropTypes.array.isRequired,
	thumbnailHeight: PropTypes.string.isRequired,
}

export default ExpandedGallery

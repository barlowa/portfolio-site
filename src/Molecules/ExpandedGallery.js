import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, InlineImage } from '../Atoms'
import { GalleryFilmStrip } from '.'
import styled from 'styled-components'

const ScaledImage = styled.img.attrs(() => ({
	height: '100%',
}))`
	width: 100vw;
	height: 100%;
	object-fit: contain;
`

const Layout = styled.div`
	display: grid;
	grid-template-rows: 80vh auto;
	justify-items: center;
	grid-gap: 40px;
`
const ExpandedGallery = ({ close, pictures, openingPicture, thumbnailHeight }) => {
	const [selectedPicture, setSelectedPicture] = useState()
	return (
		<Modal close={close}>
			<Layout thumbnailHeight={thumbnailHeight}>
				<ScaledImage src={selectedPicture || openingPicture} />
				<GalleryFilmStrip
					pictures={pictures}
					thumbnailHeight={thumbnailHeight}
					onThumbnailClick={({ picture }) => setSelectedPicture(picture)}
				/>
			</Layout>
		</Modal>
	)
}

ExpandedGallery.propTypes = {}

export default ExpandedGallery

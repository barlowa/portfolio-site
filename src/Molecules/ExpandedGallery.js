import React from 'react'
import PropTypes from 'prop-types'
import { Modal, InlineImage } from '../Atoms'
import { GalleryFilmStrip } from '.'
const ExpandedGallery = ({ close, pictures, thumbnailWidth }) => {
	return (
		<Modal close={close}>
			<InlineImage />
			<GalleryFilmStrip
				pictures={pictures}
				thumbnailHeight={thumbnailWidth}
				chosenPicture={(index) => console.log(index)}
			/>
		</Modal>
	)
}

ExpandedGallery.propTypes = {}

export default ExpandedGallery

import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from '../Atoms'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
	display: flex;
	overflow-y: scroll;
`
const GalleryFilmStrip = ({ pictures, thumbnailHeight, onThumbnailClick }) => {
	return (
		<GalleryWrapper>
			{pictures &&
				pictures.map((picture) => (
					<Thumbnail
						key={picture.key}
						src={picture.thumbnail}
						height={thumbnailHeight}
						onClick={() => onThumbnailClick(picture)}
					/>
				))}
		</GalleryWrapper>
	)
}

GalleryFilmStrip.propTypes = {
	pictures: PropTypes.array,
}

export default GalleryFilmStrip

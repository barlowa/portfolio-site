import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from '../Atoms'
import styled from 'styled-components'
/* display: flex;
overflow-y: scroll;
width: 100%; */

const GalleryWrapper = styled.div`
	overflow-x: auto;
	overflow-y: hidden;
	overflow-scrolling: touch;
	-webkit-overflow-scrolling: touch;
	white-space: nowrap;
	text-align: center;
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

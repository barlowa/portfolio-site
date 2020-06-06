import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from '../Atoms'
import styled from 'styled-components'
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
	onThumbnailClick: PropTypes.func.isRequired,
	pictures: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			thumbnail: PropTypes.string.isRequired,
			picture: PropTypes.string.isRequired,
		})
	),
	thumbnailHeight: PropTypes.string.isRequired,
}

export default GalleryFilmStrip

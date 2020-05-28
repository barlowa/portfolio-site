import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from '../Atoms'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
	display: flex;
	overflow-y: scroll;
`
const GalleryFilmStrip = ({ pictures, thumbnailHeight, chosenPicture }) => {
	return (
		<GalleryWrapper>
			{pictures &&
				pictures.map(({ key, thumbnail }, index) => (
					<Thumbnail
						key={key}
						src={thumbnail}
						height={thumbnailHeight}
						onClick={() => chosenPicture(index)}
					/>
				))}
		</GalleryWrapper>
	)
}

GalleryFilmStrip.propTypes = {
	pictures: PropTypes.array,
}

export default GalleryFilmStrip

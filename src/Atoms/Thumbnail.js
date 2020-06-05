import React from 'react'
import PropTypes from 'prop-types'
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
export const Thumbnail = ({ onClick, height, src }) => {
	return (
		<ThumbnailWrapper onClick={onClick}>
			<ThumbnailImage src={src} height={height}></ThumbnailImage>
		</ThumbnailWrapper>
	)
}

Thumbnail.defaultProps = {
	height: '150px',
}

Thumbnail.propTypes = {
	onClick: PropTypes.func.isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
}

export default Thumbnail

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img.attrs(() => ({
	width: '100%',
}))``
const InlineImageContainer = styled.div`
	display: inline-block;
	height: auto;
	max-width: ${({ width }) => width};
`
export const InlineImage = ({ width, src, onClick }) => {
	return (
		<InlineImageContainer width={width} onClick={onClick}>
			{src && <Image src={src} />}
		</InlineImageContainer>
	)
}

InlineImage.defaultProps = {
	maxWidth: '500px',
}

InlineImage.propTypes = {
	src: PropTypes.string,
	maxWidth: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default InlineImage

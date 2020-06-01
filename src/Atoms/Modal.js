import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import styled from 'styled-components'

import { Button } from '.'

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000000d9;
	display: flex;
	align-items: center;
	justify-content: center;
	.close-button {
		position: absolute;
		right: 10px;
		top: 10px;
	}
`

const ModalBody = styled.div`
	/* min-width: 400px;
	margin: 0 auto; */
	.scrollable-area {
		max-height: calc(100vh - 20px);
		max-width: calc(100vw - 20px);
		overflow: auto;
	}
	.outer {
		height: 20px;
	}
`
const modalRoot = document.getElementById('modal-root')

const Modal = ({ close, children }) => {
	// const el = useRef(document.createElement('div'))
	// useEffect(() => {
	// 	modalRoot.appendChild(el)
	// 	return () => {
	// 		modalRoot.removeChild(el)
	// 	}
	// }, [])
	return createPortal(
		<Backdrop className="backdrop">
			<div className="close-button">
				<Button onClick={close}>Close</Button>
			</div>
			<ModalBody>
				<div className="scrollable-area">
					<div>{children}</div>
				</div>
			</ModalBody>
		</Backdrop>,
		modalRoot
	)
}

Modal.propTypes = {
	close: PropTypes.func.isRequired,
	children: PropTypes.any.isRequired,
}

Modal.defaultProps = {
	show: true,
}

export default Modal

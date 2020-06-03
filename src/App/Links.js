import { Link } from 'react-router-dom'
import React from 'react'

const Links = ({ setIsOpen }) => {
	function onClickHandler() {
		if (setIsOpen) {
			return setIsOpen(false)
		} else {
			return null
		}
	}
	return (
		<>
			<Link onClick={onClickHandler} to="/#projects">
				Recent Projects
			</Link>
			<Link onClick={onClickHandler} to="/#about">
				More About Me
			</Link>
			<Link onClick={onClickHandler} to="/#uses">
				Uses
			</Link>
		</>
	)
}
export default Links

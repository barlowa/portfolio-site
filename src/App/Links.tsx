import { Link } from 'react-router-dom'
import { FC } from 'react'

const Links: FC<LinksProps> = ({ setIsOpen }) => {
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

interface LinksProps {
	setIsOpen?: (isOpen: boolean) => void
}

export default Links

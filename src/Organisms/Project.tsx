import { useEffect, useState, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { PictureProps, CloudinaryProps } from '../@types'

import { TextBlock, GalleryFilmStrip, ExpandedGallery } from '../Molecules'
import { Gutter, InlineImage } from '../Atoms'

const Layout = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 40px;
	margin-bottom: 40px;
	.gallery-limit {
		max-width: 500px;
	}
	@media only screen and (max-width: ${({ theme: { tabletBreakpoint } }) => tabletBreakpoint}) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		justify-items: center;
		div:nth-child(1) {
			order: 2;
		}
		div:nth-child(2) {
			order: 1;
		}
	}
	@media only screen and (max-width: ${({ theme: { mobileBreakpoint } }) => mobileBreakpoint}) {
		.gallery-limit {
			max-width: 300px;
		}
	}
`

const Project: FC<ProjectProps> = ({ title, image, children, gallery, thumbnailWidth = '70' }) => {
	const [galleryPictures, setGalleryPictures] = useState<PictureProps[]>([])

	const [isGalleryExpanded, setIsGalleryExpanded] = useState(false)

	const [preselectedGalleryPicture, setPreselectedGalleryPicture] = useState<string>('')

	const thumbnailtransforms = `/q_auto:best,c_scale,w_${thumbnailWidth}`

	function cloudinaryUrlTemplate({ version, public_id, format }: CloudinaryProps, transforms?: string) {
		return `https://res.cloudinary.com/dyfxobpyc/image/upload${
			transforms ? transforms : ''
		}/v${version}/${public_id}.${format}`
	}

	useEffect(() => {
		if (gallery) {
			const pictures = gallery.map((image) => {
				return {
					key: image.public_id,
					thumbnail: cloudinaryUrlTemplate(image, thumbnailtransforms),
					picture: cloudinaryUrlTemplate(image),
				}
			})
			setGalleryPictures(pictures)
		}
	}, [gallery, thumbnailtransforms])

	function expandGallery(picture: string) {
		setPreselectedGalleryPicture(picture)
		setIsGalleryExpanded(true)
	}

	return (
		<Gutter>
			<Layout>
				<div className="gallery-limit">
					<InlineImage
						src={image}
						onClick={() => {
							expandGallery(image)
						}}
					/>
					{gallery && (
						<GalleryFilmStrip
							pictures={galleryPictures}
							thumbnailHeight={thumbnailWidth}
							onThumbnailClick={(picture) => expandGallery(picture)}
						/>
					)}
				</div>
				<TextBlock title={title}>{children}</TextBlock>
				{isGalleryExpanded && (
					<ExpandedGallery
						openingPicture={preselectedGalleryPicture}
						pictures={galleryPictures}
						thumbnailHeight={thumbnailWidth}
						close={() => setIsGalleryExpanded(false)}
					/>
				)}
			</Layout>
		</Gutter>
	)
}
//add in a gallery

export default Project

interface ProjectProps {
	title: string
	image: string
	children: ReactNode
	gallery?: CloudinaryProps[]
	thumbnailWidth?: string
}

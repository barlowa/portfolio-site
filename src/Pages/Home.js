import { useHistory, useLocation } from 'react-router'
import React, { useMemo } from 'react'

import { InlineButtons, Heading } from '../Molecules'
import { Project, HeroSection, Section } from '../Organisms'
import { Title } from '../Atoms'
import { useSmoothScrolling, useFetch } from '../Hooks'

const cliftonBridge =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/v1590347259/Assets/clifton-suspension-bridge_b4vhzj.jpg'
const me =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/c_scale,w_250/v1590347259/Assets/Profile_alt.jpg'
const infund =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/c_scale,w_500/v1590346773/Projects/infund/homepage-desktop_ujzqyv.png'
const elitegarages =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/c_scale,w_500/v1590346709/Projects/elitegarages/homepage-1_lmdktb.png'

const Home = () => {
	const { push } = useHistory()
	const location = useLocation()
	useSmoothScrolling(location)

	const elitegaragesGallery = useFetch(
		useMemo(() => 'https://res.cloudinary.com/dyfxobpyc/image/list/elitegarages.json', [])
	)

	const infundGallery = useFetch('https://res.cloudinary.com/dyfxobpyc/image/list/infund.json')

	return (
		<>
			<HeroSection background={cliftonBridge}>
				<Title>Hey!</Title>
				<Title>I'm Alex Barlow</Title>
				<Title>I'm a Front End Developer</Title>
				<Title>From Bristol</Title>
				<InlineButtons
					buttons={[
						{
							label: 'Recent Projects',
							onClick: () => push('/#projects'),
						},
						{ label: 'More About Me', onClick: () => push('/#about') },
						{ label: '/uses', onClick: () => push('/#uses') },
					]}
				/>
			</HeroSection>
			<Heading id="projects">Recent Projects</Heading>
			<Project title="InFund" image={infund} gallery={infundGallery.response.resources}>
				<p>InFund is a fin-tech start up focussed on providing finance for small businesses.</p>
				<p>
					This was a completely Greenfield project which involved creating a platform to onboard
					customers directly and through finance brokers.
				</p>
				<p>
					The project also included creating an entire back end administration system. The administrative
					side of the project is used by sales, finance, operations and credit control departments
					through the use of dashboards with various functionalities and Role based access.{' '}
				</p>
				<p>My involvement with this project has mostly been focussed on creating the front end.</p>
				<p>
					There has been a lot of collaboration with graphic designers, marketing agencies and the
					internal business.
				</p>
			</Project>
			<Project title="Elite Garages" image={elitegarages} gallery={elitegaragesGallery.response.resources}>
				<p>
					Elite garages is a chain which operates across the south-east of England, providing automotive
					services.
				</p>
				<p>
					They wanted a website which brought in more online business. The focus was mainly on creating a
					platform which allows customers to buy tyres online to be fitted at any of the elite garages
					branches.
				</p>
				<p>This was then extended to allow booking an MOT online and adding a Service booking system.</p>
				<p> My involvement with this project has been on creating the front end user experience.</p>
			</Project>

			<Heading id="about">More About Me</Heading>
			<Section image={me}>
				<p>
					Since beginning my journey nearly 10 years ago, I’ve designed websites for small businesses,
					worked full time for startups, and collaborated with talented people to create digital products
					for both business and consumer use.
				</p>
				<p>
					I value simple content structure, clean design patterns, and I enjoy bringing ideas to life in
					the browser.
				</p>
				<p>
					I enjoy getting my hands dirty with new technology and continually learning new things. In my
					spare time you can find me at gigs during the summer or walking through the woods photographing
					stuff.
				</p>
			</Section>

			<Heading id="uses">/uses</Heading>
			<Section>
				<p>
					Since beginning my journey nearly 10 years ago, I’ve designed websites for small businesses,
					worked full time for startups, and collaborated with talented people to create digital products
					for both business and consumer use.
				</p>
				<p>
					I value simple content structure, clean design patterns, and I enjoy bringing ideas to life in
					the browser.
				</p>
				<p>
					I enjoy getting my hands dirty with new technology and continually learning new things. In my
					spare time you can find me at gigs during the summer or walking through the woods photographing
					stuff.
				</p>
			</Section>
		</>
	)
}

export default Home

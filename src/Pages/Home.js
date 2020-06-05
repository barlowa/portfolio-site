import { useHistory, useLocation } from 'react-router'
import React, { useMemo } from 'react'

import { InlineButtons, Heading } from '../Molecules'
import { Project, HeroSection, ImageSection, BullettedSection } from '../Organisms'
import { Title, Highlight } from '../Atoms'
import { useSmoothScrolling, useFetch } from '../Hooks'

const cliftonBridge =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/v1590347259/Assets/clifton-suspension-bridge_b4vhzj.jpg'
const cliftonBridgeMobile =
	'https://res.cloudinary.com/dyfxobpyc/image/upload/v1591316753/Assets/clifton-suspension-bridge-mobile_gt49p5.jpg'
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
			<HeroSection background={cliftonBridge} mobileBackground={cliftonBridgeMobile}>
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
						{ label: 'Uses', onClick: () => push('/#uses') },
					]}
				/>
			</HeroSection>
			<Heading id="projects">Recent Projects</Heading>
			<Project title="InFund" image={infund} gallery={infundGallery.response.resources}>
				<p>InFund is a fin-tech start up which focusses on providing finance for small businesses.</p>
				<p>
					This goal of the project was to allow customers to access a line of credit as easily as
					possible, whilst also minimising fraud risks.
				</p>
				<p>
					The scope of this project also included creating an entire administration system used by all
					departments of the business, providing administrative functionality, information and leads
					through a set of dashboards tailored to each department.
				</p>
				<p>My involvement throughout this project has been focussed on creating the front end.</p>
				<p>
					I have also collaborated a lot with the internal business, marketing agencies and graphic
					designers. I also helped to create a style guide and introduced the wireframing processes.
				</p>
			</Project>
			<Project title="Elite Garages" image={elitegarages} gallery={elitegaragesGallery.response.resources}>
				<p>
					Elite garages are a chain operating across the south-east of England, providing a wide range of
					automotive services.
				</p>
				<p>
					The aim of this project was to introduce more online business. To achieve this goal, initially
					the main focus area was creating a platform which allows customers to buy tyres online to be
					fitted at any of the Elite Garages branches.
				</p>
				<p>
					The sites functionality was then extended to allow customers to book an MOT and book a vehicle
					service or inspection online.
				</p>
				<p>
					My involvement with this project was creating the front end user experience and integrating
					with the back end.
				</p>
			</Project>

			<Heading id="about">More About Me</Heading>
			<ImageSection image={me}>
				<p>
					Since beginning my journey nearly 10 years ago, I’ve designed websites for small businesses,
					worked full time for start-ups, and collaborated with talented people to create digital
					products for both business and consumer use.
				</p>
				<p>
					I value simple content structure, clean design patterns, and I enjoy bringing ideas to life in
					the browser.
				</p>
				<p>
					I also enjoy getting my hands dirty with new technology and continually learning new things.
				</p>
				<p>
					In my spare time you can generally find me at gigs or festivals during the summer or walking
					through the woods taking photographs of nature.
				</p>
			</ImageSection>

			<Heading id="uses">Uses</Heading>
			<BullettedSection>
				<p>
					This is a short list of the hardware and software I own or use on a regular basis. Based on the
					wes-bos{' '}
					<a target="_blank" rel="noopener noreferrer" href="https://uses.tech">
						uses.tech
					</a>{' '}
					initiative.
				</p>
			</BullettedSection>
			<BullettedSection title="Text Editor">
				<li>
					<Highlight>Visual Studio Code:</Highlight> Definitely my favourite editor. I was a reluctant
					Sublime convert but the switch was more than worth it.
				</li>
				<li>
					<Highlight>Theme:</Highlight> Dark++, because developers can’t think in anything other than
					dark mode.
				</li>
				<li>
					<Highlight>Extensions:</Highlight> I don’t have too many global recommendations since it
					depends a lot on what you’re working with, but I’ll mention:
				</li>
				<li>
					<Highlight>Bracket Pair Colorizer:</Highlight> This extension makes it very easy to distinguish
					where a code block ends by assigning the same colour to the opening and closing brackets.
				</li>
				<li>
					<Highlight>Prettier:</Highlight> I have learnt to love prettier. I used to absolutely hate the
					way it changed my code. But now I am used to it, my code has never looked more uniform. I have
					it running on save and it almost takes formatting out of the equation which gives you more
					brain bandwidth to think about your actual code.
				</li>
				<li>
					<Highlight>GitLens:</Highlight> Yes, VS Code has the very useful Timeline view now, but this
					extension is still useful for seeing inline commits and git blame is always fun!
				</li>
			</BullettedSection>

			<BullettedSection title="Development">
				<li>
					<Highlight>Java Script:</Highlight> This is my main language these days, but React is the main
					library I use to build anything front-end related at the moment. I am interested in VUE and I
					have dabbled with angular before, but I prefer Reacts less opinionated approach. I am also
					interested in branching out and learning swift.
				</li>
				<li>
					<Highlight>CSS:</Highlight> I love CSS! Therefore, I love for Styled Components! I like the way
					you can directly make changes to CSS in the file you are working on, or export it and use it
					anywhere you want! Also, not having to compile the CSS separately is nice.
				</li>
				<li>
					<Highlight>State Management:</Highlight> For state management, Redux has its place in larger
					applications. The state tree and actions can get overly complicated and difficult to manage;
					not to mention there is a lot of boilerplate and opportunity to misuse it. This is where
					something like Reacts’ context API steps in; with the addition of the useContext hook, I have
					become a convert.
				</li>
			</BullettedSection>
			<BullettedSection title="Desk Set Up">
				<li>
					<Highlight>Monitor:</Highlight> Acer CB271HK Fully adjustable 4K 10-bit IPS monitor. I find
					that I am a lot more productive with more desktop space, since it means I don’t need to scroll
					as much through my code, especially if the monitor is in portrait mode; the novelty wore off
					that quite quickly though.
				</li>
				<li>
					<Highlight>Laptop:</Highlight>My current laptop is a Macbook pro 15 inch mid 2015 2.5ghz 16gb
					ram 512gb SSD. This laptop has been a trooper, it has survived a full bottle of peroni over the
					keyboard with no ill effects (wasn’t even my fault, I had to tear it down and clean it though).
					I don’t see the need to replace it just yet, it still does everything I need it to do. The 16
					inch macbook is looking like a good upgrade in a few years, especially since the keyboard
					doesn’t break now.
				</li>
			</BullettedSection>
		</>
	)
}

export default Home

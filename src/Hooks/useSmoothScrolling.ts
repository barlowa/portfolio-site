import { useEffect, useRef } from 'react'
import { animateScroll, scroller } from 'react-scroll'

function useSmoothScrolling({ hash, key }: { hash: string; key?: string }) {
	const ref = useRef(0)
	useEffect(() => {
		const scrollOptions = { smooth: 'easeInOutQuint', duration: 750, offset: -100 }
		if (hash.length) {
			console.log(hash)
			scroller.scrollTo(hash.substring(1), scrollOptions)
		}
		//Allows scrollToTop functionality except upon page load, ref incremented upon each change
		if (!hash.length && ref.current > 0) {
			console.log(`go to top ref:${ref.current}`)
			animateScroll.scrollToTop(scrollOptions)
		}
		ref.current++
		//key triggers change every time
	}, [hash, key])
}

export default useSmoothScrolling

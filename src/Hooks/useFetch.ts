import { useState, useEffect } from 'react'

function useFetch<Data>(url: string, options?: object) {
	const [response, setResponse] = useState<Data | undefined>(undefined)
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal
		const getData = async () => {
			try {
				setIsLoading(true)
				const response = await fetch(url, options)
				const json = await response.json()
				if (!signal.aborted) {
					setResponse(json)
				}
			} catch (error) {
				if (!signal.aborted) {
					setError(error)
				}
			} finally {
				if (!signal.aborted) {
					setIsLoading(false)
				}
			}
		}
		getData()
		return () => {
			abortController.abort()
		}
	}, [options, url])

	return { response, isLoading, error }
}

export default useFetch

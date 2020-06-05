import { Switch, Route } from 'react-router-dom'
import React from 'react'

import { Home } from '.'

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
		</Switch>
	)
}

Routes.propTypes = {}

export default Routes

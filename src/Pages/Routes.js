import { Switch, Route } from 'react-router-dom'
import React from 'react'

import { Home } from '.'

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			{/* <Route path="/anotherpage" render={() => <div>hello</div>} /> */}
		</Switch>
	)
}

Routes.propTypes = {}

export default Routes

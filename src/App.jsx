import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={ItemListContainer} />
			</Switch>
		</BrowserRouter>
	)
}

export default App

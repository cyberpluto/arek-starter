import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

// Import Components
import Main from './main/Main.jsx'

// Store
import store, {history} from './store'

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}/>
		</Router>
	</Provider>,
	document.getElementById('root')
)

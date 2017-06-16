import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
require('./styles/reset.css')
// Import Components
import Main from 'components/Main'

// Store
import store from 'Redux/store'

render(
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/:param?" component={Main}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)

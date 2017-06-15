import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Import Components
import Main from 'components/Main.jsx'
import About from 'components/About.jsx'
// import About from 'components/About.jsx'

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

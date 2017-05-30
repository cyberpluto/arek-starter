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

render (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route path="/about" component={About}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
)

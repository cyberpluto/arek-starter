import React from 'react'
import {ApolloClient, ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
require('../styles/reset.css')
// Import Components
import Main from 'components/Main'
// Store
import store from 'Redux/store'

const client = new ApolloClient()

const Root = () => {
	return (
		<ApolloProvider client={client} store={store}>
			<Router>
				<div>
					<Route path="/:param?" component={Main} />
				</div>
			</Router>
		</ApolloProvider>
	)
}

export default Root

import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
require('../styles/reset.css')
// Import Components
import Main from 'components/Main'
// Store
import store from 'Redux/store'

const client = new ApolloClient()

const Root = () => {
	return (
		<ReduxProvider store={store}>
			<ApolloProvider client={client}>
				<Router>
					<div>
						<Route path="/:param?" component={Main} />
					</div>
				</Router>
			</ApolloProvider>
		</ReduxProvider>
	)
}

export default Root

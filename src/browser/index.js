import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from 'components/App'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import '../styles/reset.css'

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__)
const client = new ApolloClient({
	link: createHttpLink({
		uri: '/graphql',
	}),
	cache,
})

hydrate(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root')
)

import express from 'express'
import React from 'react'
import {StaticRouter} from 'react-router'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import App from 'components/App'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider, renderToStringWithData} from 'react-apollo'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import 'isomorphic-unfetch'
import graphqlHTTP from 'express-graphql'
import {db} from './db'
import {schema} from '../graphql/schema'

const port = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))
app.use(express.static('assets'))

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
		context: {
			db: db,
		},
	})
)

app.get('*', async (req, res) => {
	const context = {}
	const sheet = new ServerStyleSheet()

	try {
		const cache = new InMemoryCache()
		const client = new ApolloClient({
			ssrMode: true,
			link: new HttpLink({
				uri: `${req.protocol}://${req.headers.host}/graphql`,
			}),
			cache,
		})
		const component = (
			<ApolloProvider client={client}>
				<StaticRouter location={req.url} context={context}>
					<StyleSheetManager sheet={sheet.instance}>
						<App />
					</StyleSheetManager>
				</StaticRouter>
			</ApolloProvider>
		)
		const content = await renderToStringWithData(component)
		const styleTags = sheet.getStyleTags()
		const initialState = cache.extract()
		const spriteContent = sprite.stringify()
		if (context.url) {
			res.header(Location, context.url)
		} else {
			res.send(`
	<!DOCTYPE html>
    <html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
				<script src="bundle.js" defer></script>
				${styleTags}
			</head>
    
			<body>
				${spriteContent}
				<div id="root">${content}</div>
				<script>
					window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(
						/</g,
						'\\u003c'
					)};
        </script>
			</body>
		</html>
	`)
		}
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(e)
	}
})

app.listen(port)
// eslint-disable-next-line no-console
console.log(`server started at port ${port}`)

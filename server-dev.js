const express = require('express')
const graphqlHTTP = require('express-graphql')
const {db} = require('./src/server/db')
const {schema} = require('./src/graphql/schema')

var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var compiler = webpack(webpackConfig)

const port = process.env.PORT || 8080
const app = express()

app.use(require('webpack-dev-middleware')(compiler))
app.use(require('webpack-hot-middleware')(compiler))

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
	res.send(`
		<!DOCTYPE html>
		  <html lang="en">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
					<script src="bundle.js" defer></script>
				</head>
	
				<body>
					<div id="root"></div>
				</body>
			</html>
		`)
})

app.listen(port)
// eslint-disable-next-line no-console
console.log(`server started at port ${port}`)

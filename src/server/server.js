import express from 'express'
import React from 'react'
import {StaticRouter} from 'react-router'
import {renderToString} from 'react-dom/server'
import {ServerStyleSheet} from 'styled-components'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import App from 'components/App'
import reset from '../styles/reset.css'

const port = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))
app.use(express.static('assets'))

app.get('*', (req, res) => {
	const context = {}
	const sheet = new ServerStyleSheet()
	const markup = renderToString(
		sheet.collectStyles(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)
	)
	const styles = sheet.getStyleTags()
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
				<style>${reset.toString()}</style>
				${styles}
			</head>
    
			<body>
				${spriteContent}
				<div id="root">${markup}</div>
			</body>
		</html>
	`)
	}
})

app.listen(port)
// eslint-disable-next-line no-console
console.log(`server started at port ${port}`)

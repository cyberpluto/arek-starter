import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.js'
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/dist'))

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
console.log(`server started at port ${port}`)

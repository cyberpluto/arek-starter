const webpack = require('webpack')
const path = require('path')
var nodeExternals = require('webpack-node-externals')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const browserConfig = {
	entry: './src/browser/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			appRedux: path.join(__dirname, 'src/redux/'),
			components: path.join(__dirname, 'src/components/'),
			assets: path.join(__dirname, 'assets/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
		}),
		new SpriteLoaderPlugin(),
	],
}

const serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname + '/dist',
		filename: 'server.js',
		libraryTarget: 'commonjs2',
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			appRedux: path.join(__dirname, 'src/redux/'),
			components: path.join(__dirname, 'src/components/'),
			assets: path.join(__dirname, 'assets/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false',
		}),
		new SpriteLoaderPlugin(),
	],
}

module.exports = [browserConfig, serverConfig]

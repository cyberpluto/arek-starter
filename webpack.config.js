const webpack = require('webpack')
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
	entry: ['webpack-hot-middleware/client', './src/browser/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/',
	},
	devtool: 'source-map',
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			appRedux: path.resolve(__dirname, 'src/redux/'),
			components: path.resolve(__dirname, 'src/components/'),
			assets: path.resolve(__dirname, 'assets/'),
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
			{
				test: /\.css$/,
				use: ['css-loader'],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new SpriteLoaderPlugin(),
	],
}

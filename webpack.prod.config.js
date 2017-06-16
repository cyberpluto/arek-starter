const webpack = require('webpack')
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
	devtool: 'source-map',
	entry: './app/App.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Redux: path.resolve(__dirname, 'app/redux/'),
			components: path.resolve(__dirname, 'app/components/'),
			assets: path.resolve(__dirname, 'assets/'),
		},
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
				},
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.css$/,
				use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
			},
		],
	},
	plugins: [
		new SpriteLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
}

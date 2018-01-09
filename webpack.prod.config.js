const webpack = require('webpack')
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
	devtool: 'source-map',
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Redux: path.resolve(__dirname, 'src/redux/'),
			components: path.resolve(__dirname, 'src/components/'),
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
					plugins: [
						'transform-decorators-legacy',
						'transform-class-properties',
					],
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
}

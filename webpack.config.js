const webpack = require('webpack')
const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index.jsx',
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		historyApiFallback: true,
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
		rules: [
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
		new webpack.HotModuleReplacementPlugin(),
		// Use NoErrorsPlugin for webpack 1.x
		new webpack.NoEmitOnErrorsPlugin(),
	],
}

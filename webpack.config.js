const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: './app/App.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
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
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /node_modules/,
				loader: "file-loader?name=/public/icons/[name].[ext]",
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
				},
			},
		],
	},
}

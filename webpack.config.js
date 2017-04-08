const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/App.jsx',
  ],
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true
  },
  resolve: {
    alias: {
      Redux: path.resolve(__dirname, 'app/redux/'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

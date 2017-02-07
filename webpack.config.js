const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/App.jsx',
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
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

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/App.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true
  },
  resolve: {
    alias: {
      Redux: path.resolve(__dirname, 'app/redux/'),
      components: path.resolve(__dirname, 'app/components/'),
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

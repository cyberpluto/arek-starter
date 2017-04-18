const webpack = require("webpack")

module.exports = {
  devtool: 'source-map',
  entry: './app/App.jsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/build/",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ]
};

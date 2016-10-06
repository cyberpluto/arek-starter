const webpack = require("webpack")
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: './app/App.jsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/build/",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
        loaders: [
          'babel?presets[]=es2015,presets[]=stage-2,presets[]=react,plugins[]=transform-decorators-legacy,plugins[]=react-hot-loader/babel'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
          'sass'
        ]
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ]
};

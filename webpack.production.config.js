var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./app/main",

  output: {
    path: __dirname + "/build/",
    filename: "app.js",
    publicPath: "/"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
      { test: /\.(png|.svg|jpg)$/, loader: 'url-loader?limit=500000' },
      { test: /\.svg$/, loader: "url-loader?limit=50000&mimetype=image/svg+xml" },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
}
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main',

  output: {
    path: './build',
    filename: 'bundle.js', // deployable file
    publicPath: 'http://localhost:8080/build' // dev server
  },

  //   plugins: [
  //   new ExtractTextPlugin('style.css', { allChunks: true })
  // ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app") // must be fully qualified file path
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        // More: https://github.com/tcoopman/image-webpack-loader
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ],
  },
    resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
};

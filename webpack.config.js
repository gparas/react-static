const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      // Load ES6/JSX
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // Load styles
      { 
        test: /\.scss$/, 
        loader: "style!css!postcss!sass!sass-resources" 
      },
      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  postcss: [autoprefixer({ browserslist: ['last 2 versions, > 10%'] }) ],
  sassResources: './app/assets/styles/**/*.scss'
};
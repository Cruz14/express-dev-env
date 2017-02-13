const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const pkg = require('./package.json');
const config = require('./server/config');

const sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, './src/styles'));

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',   // Automatic Refresh
      './src/app',
    ],
    vendors: ['react', 'react-dom', 'react-router'],
  },

  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, './node_modules/remaps'),
        ],
        loaders: ['react-hot', 'babel'],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: sassLoader },
    ],
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      components: path.join(__dirname, './src/components'),
      layouts: path.join(__dirname, './src/layouts'),
      views: path.join(__dirname, './src/views'),
      utils: path.join(__dirname, './src/utils'),
      styles: path.join(__dirname, './src/styles'),
      docs: path.join(__dirname, './src/docs'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEVTOOLS__: true,
      __VERSION__: JSON.stringify(pkg.version)
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

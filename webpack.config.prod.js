const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnano = require('cssnano');
const pkg = require('./package.json');

const sassLoaderBuild = 'style!css!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, './src/styles'));

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/app'],
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
        loaders: ['babel'],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(csv|json)$/, loader: 'file-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: sassLoaderBuild },
    ],
  },

  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 version'],
      },
      discardComments: {
        removeAll: true,
      },
    }),
  ],

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
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
      __DEVTOOLS__: false,
      __VERSION__: JSON.stringify(pkg.version),
      __JWT__: JSON.stringify('__JWT_CONFIG__')
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
      },
    }),
  ],
};

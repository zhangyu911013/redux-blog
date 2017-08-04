const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/app',
    ],
    vendor: ['react', 'react-dom', 'react-router'],
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'style!css!sass?sourceMap=true&sourceMapContents=true',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendors.js',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

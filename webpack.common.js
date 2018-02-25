const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry:  {
    app: './src/app.js',
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: distDir,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(distDir, '**/*')]),
    new HtmlWebpackPlugin({
      template: 'src/index.html.ejs',
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'hupai-data/delta.csv', to: 'delta.csv' },
    ]),
  ],
};

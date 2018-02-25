const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new UglifyjsWebpackPlugin({
      sourceMap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'pace-progress/pace.min.js', to: 'lib/pace-progress/pace.min.js' },
      { from: 'pace-progress/themes/blue/pace-theme-flash.css', to: 'lib/pace-progress/themes/blue/pace-theme-flash.css' },

      { from: 'jquery/dist/jquery.min.js', to: 'lib/jquery/jquery.min.js' },

      { from: 'highcharts/css/highcharts.css', to: 'lib/highcharts/highcharts.css' },
      { from: 'highcharts/js/highcharts.js', to: 'lib/highcharts/highcharts.js' },
      { from: 'highcharts/js/modules/data.js', to: 'lib/highcharts/modules/data.js' },
      { from: 'highcharts/js/modules/exporting.js', to: 'lib/highcharts/modules/exporting.js' },
    ], {
      context: 'node_modules',
    }),
  ],
});

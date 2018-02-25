const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const publicPath = '/';

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: commonConfig.output.path,
    publicPath: publicPath,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'pace-progress/pace.js', to: 'lib/pace-progress/pace.js' },
      { from: 'pace-progress/themes/blue/pace-theme-flash.css', to: 'lib/pace-progress/themes/blue/pace-theme-flash.css' },

      { from: 'jquery/dist/jquery.js', to: 'lib/jquery/jquery.js' },

      { from: 'highcharts/css/highcharts.css', to: 'lib/highcharts/highcharts.css' },
      { from: 'highcharts/js/highcharts.src.js', to: 'lib/highcharts/highcharts.src.js' },
      { from: 'highcharts/js/modules/data.src.js', to: 'lib/highcharts/modules/data.src.js' },
      { from: 'highcharts/js/modules/exporting.src.js', to: 'lib/highcharts/modules/exporting.src.js' },
    ], {
      context: 'node_modules',
    }),
  ],
});

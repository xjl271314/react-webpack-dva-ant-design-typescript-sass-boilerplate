const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.prod');
const config = Object.assign(webpackConfig,{mode: 'production' });

webpack(webpackConfig, (err, stats) => {
  process.stdout.write(stats.toString() + '\n');
});
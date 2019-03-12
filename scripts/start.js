const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../config/webpack.config.dev');


const options = {
  hot: true,
  host: '0.0.0.0'
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);

const compiler = webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true,
  },
});

const server = new webpackDevServer(compiler, devServerOptions);

server.listen(5000, '0.0.0.0', () => {
  console.log('Starting server on http://localhost:5000');
});

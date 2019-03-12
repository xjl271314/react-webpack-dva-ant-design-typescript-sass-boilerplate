const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PROJECT_ROOT = path.join(__dirname, '../');
const SRC = path.join(PROJECT_ROOT, '/', 'src');
const PUBLIC = path.join(PROJECT_ROOT, '/', 'public');
const DIST = path.join(PROJECT_ROOT, '/', 'dist');

  module.exports = {
    context: PROJECT_ROOT,
    entry: SRC,
    output:{
        path:DIST,
        filename:"bundle-[hash].js"
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                include: SRC,
                use:{
                    loader: "babel-loader"
                },
                exclude:/node_modules/
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use:{
                    loader: require.resolve('url-loader'),
                    options: {
                      limit: 10000,
                      name: 'assets/media/[name].[hash:8].[ext]',
                    },
                }
              },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: ('assets/fonts/[name].[hash:7].[ext]')
                }
              },
              {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
              },
        
              {
                test: /\.ts$/,
                enforce: 'pre',
                use: ['tslint-loader'],
              },
           
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', 'json'],
      alias:{
        '@':path.join(__dirname, '..', 'src'),
        'pages':path.join(__dirname, '..', 'src/pages'),
        'api':path.join(__dirname, '..', 'src/api'),
        'util':path.join(__dirname, '..', 'src/util'),
        'components':path.join(__dirname, '..', 'src/components'),
        'assets':path.join(__dirname, '..', 'src/assets'),
      }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: PUBLIC + "/index.html",
        }),
        
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
     
}

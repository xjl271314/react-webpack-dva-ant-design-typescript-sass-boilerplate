
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require("./webpack.config.base");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
const merge = require("webpack-merge");
const PROJECT_ROOT = path.join(__dirname, '../');
const SRC = path.join(PROJECT_ROOT, '/', 'src');
const PUBLIC = path.join(PROJECT_ROOT, '/', 'public');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const px2rem = require('postcss-px2rem-exclude');
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions, preProcessor,cssModules) => {
    const loaders = [
        MiniCssExtractPlugin.loader,
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            px2rem({remUnit:75,exclude: /node_modules/i})
          ],
        },
      },
     
    ];
    if (preProcessor) {
      loaders.push(require.resolve(preProcessor));
    }
     if (cssModules) {
      loaders.push(cssModules);
    }
    return loaders;
  };

const webpackConfigProd = {
    mode: "production",
    module:{
        rules:[
            {
                test: /\.css$/,
                use: getStyleLoaders()
            },
            {
                test: sassRegex,
                exclude: sassModuleRegex,//这个需要exclude sassmodule的要不编译错误
                use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader',{
                    loader:'sass-resources-loader',
                    options:{
                      resources:SRC+'/assets/common.scss'
                    }
                  })
            },
            {
                test: sassModuleRegex,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]',
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                  'sass-loader',{
                    loader:'sass-resources-loader',
                    options:{
                        resources:SRC+'/assets/common.scss'
                    }
                  })
            }
        ],
    },
    plugins:[
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: PUBLIC + "/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new OptimizeCssAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: '[id].css',
          }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
};




module.exports = merge(webpackConfigBase, webpackConfigProd);
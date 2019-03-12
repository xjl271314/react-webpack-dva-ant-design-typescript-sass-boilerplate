const path = require("path");
const PROJECT_ROOT = path.join(__dirname, '../');
const SRC = path.join(PROJECT_ROOT, '/', 'src');
const merge = require("webpack-merge");
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const webpackConfigBase = require("./webpack.config.base");
const px2rem = require('postcss-px2rem-exclude');
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions, preProcessor, cssModules) => {
  const loaders = [
    require.resolve('style-loader'),
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
          px2rem({ remUnit: 75, exclude: /node_modules/i })
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


const webpackConfigDev = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: sassRegex,
        // exclude: sassModuleRegex,//这个需要exclude sassmodule的要不编译错误
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent
          }, 'sass-loader', {
            loader: 'sass-resources-loader',
            options: {
              resources: SRC + '/assets/common.scss'
            }
          })
      },
      // {
      //     test: sassModuleRegex,
      //     use: getStyleLoaders(
      //         {
      //             importLoaders: 2,
      //             modules: true,
      //             localIdentName: '[local]___[hash:base64:5]',
      //             getLocalIdent: getCSSModuleLocalIdent,
      //         },
      //       'sass-loader',{
      //         loader:'sass-resources-loader',
      //         options:{
      //             resources:SRC+'/assets/common.scss'
      //         }
      //       })
      // }
    ],
  },
  devServer: {
    contentBase: SRC,
    hot: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'minimal',
    clientLogLevel: 'warning',
  },
}

module.exports = merge(webpackConfigBase, webpackConfigDev);


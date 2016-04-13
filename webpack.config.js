/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge'); //Used to merge webpack configs
var helpers = require('./config/helpers');

// Webpack Plugins
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  host: 'localhost',
  port: 3001,
  ENV: ENV,
  HMR: HMR
};

/*
 * Config
 */
module.exports = {
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,

  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'app': './client/bootstrap.ts' // our angular app
  },

  // Config for our build files
  output: {
    path: root('__build__'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    // ensure loader extensions match
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    preLoaders: [{test: /\.ts$/, loader: 'tslint-loader'}],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [/\.spec\.ts$/]
      },

      // Support for *.json files.
      {test: /\.json$/, loader: 'json-loader'},

      // Support for CSS as raw text
      {test: /\.css$/, loader: 'raw-loader'},

      // support for .html as raw text
      {test: /\.html$/, loader: 'raw-loader'},
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    }),

    new CommonsChunkPlugin({
      name: helpers.reverse(['polyfills', 'vendor', 'main']),
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      template: 'client/public/index.html',
      chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
    })
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
  // our Webpack Development Server config
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    contentBase: 'client/public',
    publicPath: '/__build__',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

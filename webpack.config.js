const webpack = require('webpack');
const ejs = require('ejs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtensionReloader = require('webpack-extension-reloader');
const { VueLoaderPlugin } = require('vue-loader');
const { version } = require('./package.json');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');

const config = {
  mode: process.env.NODE_ENV,
  context: __dirname + '/src',
  entry: {
    'background': './background.js',
    'content-script/audible-library-extractor-content-script': './content-script/content-script.js',
    'output-page/output-page': './output-page/output-page.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
      '@': path.join(__dirname, '/src/output-page/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?indentedSyntax'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images/',
          emitFile: false,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/',
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'window',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'chunks/[name].css',
    }),
  ],
};

var copyPluginArray = { patterns: [
  { from: 'assets', to: 'assets' },
  { from: 'output-page/favicons', to: 'output-page/favicons' },
  { from: 'output-page/browser-polyfill.min.js', to: 'output-page/browser-polyfill.min.js' },
  { from: 'output-page/cover-placeholder.svg', to: 'output-page/cover-placeholder.svg' },
  { from: 'output-page/output-page.html', to: 'output-page/index.html', transform: transformHtml },
  {
    from: 'manifest.json',
    to: 'manifest.json',
    transform: (content) => {
      const jsonContent = JSON.parse(content);
      jsonContent.version = version;

      if (config.mode === 'development') {
        jsonContent['content_security_policy'] = "script-src 'self' 'unsafe-eval' http://localhost:8098; object-src 'self'";
      }

      return JSON.stringify(jsonContent, null, 2);
    },
  },
  { from: __dirname + '/dist/chunks', to: __dirname + '/dist/output-page/chunks', force: true }
]};

config.plugins.push( new CopyPlugin(copyPluginArray) );


if (config.mode === 'production') {

  config.plugins.push(new BundleAnalyzerPlugin());

  config.plugins.push(
    new FileManagerPlugin({
      onEnd: {
        delete: [
          './dist/output-page/chunks'
        ],
        move: [
          { source: './dist/chunks', destination: './dist/output-page/chunks' }
        ],
      }
    })
  );

  config.plugins.push(new CleanWebpackPlugin());
}


if (config.mode === 'production') {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

if (process.env.HMR === 'true') {
  config.plugins = (config.plugins || []).concat([
    new ExtensionReloader({
      manifest: __dirname + '/src/manifest.json',
    }),
  ]);
}

function transformHtml(content) {
  return ejs.render(content.toString(), {
    ...process.env,
  });
}

module.exports = config;

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  resolve: { extensions: ['.js', '.jsx'] },

  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 8080,
    publicPath: '/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIentName: '[name]--[local]--[hash:base64:8]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=public/fonts/Roboto/[name].[ext]',
      },
    ],
  },
};

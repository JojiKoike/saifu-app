const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval",

  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "/public/js"),
    filename: "[name].js",
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss?$/,
        loader: "style-loader!css-loader!sass-loader",
        include: path.join(__dirname, "src", "styles")
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      }
    ]
  }
};

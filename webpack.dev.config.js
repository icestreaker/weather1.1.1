const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : "./Public/src/index.js",

  output : {
    path : __dirname + "build",
    filename : "bundle.js",
    libraryTarget: "umd"
  },

  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /(node_modules)/,
        loader : ["babel-loader"]
      },
      {
        test : /\.css$/,
        exclude : /(node_modules)/,
        loader : "style-loader!css-loader"
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + "/Public/index.html"
    })
  ],

  devServer : {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}

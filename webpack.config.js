var webpack = require("webpack");

module.exports = {
  entry : "./Public/src/index.js",
  output : {
    path : "./build",
    filename : "bundle.js",
    publicPath : "Public"
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /(node_modules)/,
        loader : ["babel-loader"],
      },
      {
        test : /\.css$/,
        exclude : /(node_modules)/,
        loader : "style-loader!css-loader"
      }
    ]
  },
  devServer : {
    port : 3000,
    contentBase : "./build",
    inline : true
  }
}

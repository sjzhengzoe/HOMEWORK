const webpackCommon = require("./webpack.common.js");
const path = require("path");
module.exports = {
  mode: "development",
  ...webpackCommon,
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 3000,
    hot: true,
  },
  target: "web",
  stats: "normal",
};

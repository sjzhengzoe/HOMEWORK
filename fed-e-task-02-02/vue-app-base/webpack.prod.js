const webpackCommon = require("./webpack.common.js");
module.exports = {
  mode: "none",
  ...webpackCommon,
  devtool: "nosources-source-map",
  stats: "errors-only",
};

const webpackCommon = require("./webpack.common.js");
module.exports = {
  mode: "production",
  ...webpackCommon,
  devtool: "nosources-source-map",
  stats: "errors-only",
};

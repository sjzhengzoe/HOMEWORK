const path = require("path");
const fs = require("fs");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 1 * 1000,
              name: "assets/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "public",
          filter: async (resourcePath) => {
            const filename = path.basename(resourcePath);
            return filename === "index.html" ? false : true;
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({ title: "Common Title", BASE_URL: "public/", template: "public/index.html" }),
    new webpack.DefinePlugin({
      HOST: '"https://test.cn"',
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".less"],
  },
  optimization: {
    // 只是用引入的模块
    usedExports: true,
    // 删除动作
    minimize: true,
    // 作用域提升 代码合并
    concatenateModules: true,
    // 标记是否有副作用
    sideEffects: true,
    // 代码分割
    splitChunks: {
      chunks: "all",
    },
  },
};

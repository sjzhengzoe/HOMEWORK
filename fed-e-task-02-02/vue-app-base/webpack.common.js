const path = require("path");
const fs = require("fs");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".js", ".vue", ".less"],
  },
};

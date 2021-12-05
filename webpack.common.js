/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  optimization: { minimizer: [new OptimizeCSSAssetsPlugin({ cssProcessorPluginOptions: { preset: ["default", { discardComments: { removeAll: true } }] } }), new UglifyJsPlugin()] },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
      favicon: path.resolve(__dirname, "src/public/favicon.ico"),
      title: "Progressive Web Application",
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jp?eg|png)/,
          options: { quality: 50 },
        },
      ],
      overrideExtension: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: { ignore: ["**/images/**"] },
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({ entry: path.resolve(__dirname, "src/scripts/sw.js") }),
    new FixStyleOnlyEntriesPlugin(),
  ],
};

import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import nodeExternals from "webpack-node-externals";

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

export default {
  target: "node",
  externals: [nodeExternals()],

  entry: {
    app: src + "/main.js",
  },

  plugins: [new CleanWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx", ".json"],
  },

  output: {
    filename: "[name].js",
    publicPath: dist,
    path: dist,
  },
};

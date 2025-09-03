const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/", // Public path зазвичай "/" для devServer
    clean: true, // Очищення директорії 'dist' перед кожною збіркою
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Замість publicPath у devServer
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.module.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]__[sha1:hash:hex:7]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        type: "asset/resource", // Заміна file-loader
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // Обробка шрифтів
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
};

module.exports = (env, options) => {
  const isProd = options.mode === "production";
  conf.devtool = isProd ? "source-map" : "eval-source-map";
  conf.target = "web";
  return conf;
};

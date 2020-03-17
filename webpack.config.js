const path = require("path");
//const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  mode: "development",
  devtool:'eval',
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  //   이 부분은 entry와 output의 기본값으로 생략 가능합니다.
  entry: './src/main.js', //합쳐지는 파일 이름
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // })
  ]
};

const htmlWebpackPlugin = require("html-webpack-plugin")

const paths = require("./paths")
const path = require("path")
const common = require("./common")
common.mode = "development"
common.output = Object.assign(common.output, {
  pathinfo: true,
  filename: "static/js/bundle.js",
  chunkFilename: "static/js/[name].chunk.js",
  devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
})
common.plugins = [new htmlWebpackPlugin({
  title: "abc",
  filename: "index.html",
  template: `${paths.PUBLIC}/index.html`,
  minify: {
    collapseWhitespace: true,
    emoveComments: true,
    minifyCSS: true,
  },
}),]
common.devServer = {
  host: "0.0.0.0",
  port: 8180,
  contentBase: paths.PUBLIC,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  overlay: false,
  publicPath: "/",
  historyApiFallback: true,
  disableHostCheck: true,
  // proxy: {
  //   "/hsy/**": {
  //     changeOrigin: true,
  //     // target: "https://inte-cloud.chanjet.com",
  //     // target: "http://127.0.0.1:7000",
  //     //target: "http://10.1.145.218:7000",
  //     target: "https://cloud.chanjet.com",
  //     //target: "http://hsy-dev-saas.yqk8s.chanjet.com.cn",
  //     secure: true,
  //   },
  // },
}
module.exports = common
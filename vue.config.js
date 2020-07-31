/**
 * vue cli 配置文件
 * @file vue.config.js
 */

const enableSourceMap = Boolean(Number(process.env.VUE_APP_SOURCEMAP))

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: false,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: enableSourceMap,
  crossorigin: undefined,
  integrity: false,
  chainWebpack: config => {
  },
  configureWebpack: config => {
  },
  css: {
    sourceMap: enableSourceMap,
    loaderOptions: {
      // 给 sass-loader 传递选项
      // sass: {
      //   prependData: `@import "";`
      // }
    }
  },
  devServer: {
    host: process.env.VUE_APP_DEV_HOST,
    port: process.env.VUE_APP_DEV_PORT,
    hot: true,
    hotOnly: false,
    open: process.platform === 'darwin',
    compress: true,
    disableHostCheck: true,
    historyApiFallback: {},
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {}
  }
}

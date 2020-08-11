/**
 * vue cli 配置文件
 * @file vue.config.js
 */

const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const dayjs = require('dayjs')

const resolve = dir => path.join(__dirname, dir)
const enableSourceMap = Boolean(Number(process.env.VUE_APP_SOURCEMAP))
const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
const isProd = process.env.NODE_ENV === 'production'

const apps = []
const pages = {}
const aliases = []
const rewrites = []

// 多入口
glob.sync('./src/apps/*/index.js', {
  noDir: true
}).forEach(entry => {
  const [, name] = /^\.\/src\/apps\/(\w+)\/index\.js$/.exec(entry)
  if (name) {
    // 应用名称
    apps.push(name)

    // 多页入口
    pages[name] = {
      entry,
      template: entry.replace(/\.js$/, '.html'),
      filename: `${name}.html`,
      title: name.toUpperCase(),
      chunks: [
        'chunk-vendors',
        'chunk-common',
        name
      ]
    }

    // 路径别名
    aliases.push({
      key: name,
      val: resolve(entry.replace(/\/index\.js$/, ''))
    })

    // rewrites
    rewrites.push({
      from: new RegExp(`^\\/${name}(\\/?$|\\/[^.]+$)`),
      to: `/${name}.html`
    })
  }
})

// 生产环境上SPA模式修正
const pageProps = Object.keys(pages)
if (isProd && pageProps.length === 1) {
  pages[pageProps[0]].filename = 'index.html'
}

module.exports = {
  pages,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: enableSourceMap,
  crossorigin: undefined,
  integrity: false,
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(new webpack.ProvidePlugin({
        _: 'lodash'
      }))

    // 删除默认入口app
    config
      .entryPoints
      .delete('app')

    // 设置路径别名
    aliases.forEach(alias => {
      config.resolve.alias.set(`@${alias.key}`, alias.val)
    })

    // 优化生成的html
    apps.forEach(app => {
      // 删除 preload
      config.plugins.delete(`preload-${app}`)

      // 删除 proload
      config.plugins.delete(`prefetch-${app}`)

      // 修改 html
      if (config.plugins.has(`html-${app}`)) {
        config
          .plugin(`html-${app}`)
          .tap(args => {
            args[0] = {
              ...args[0],
              meta: {
                build: currentTime
              }
            }
            return args
          })
      }
    })
  },
  configureWebpack: config => {
  },
  css: {
    sourceMap: enableSourceMap,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: '@import "~@/assets/scss/index";'
      }
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
    historyApiFallback: {
      rewrites
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}

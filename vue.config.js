/**
 * vue cli 配置文件
 * @file vue.config.js
 */

const path = require('path')
const { error } = require('@vue/cli-shared-utils')
const webpack = require('webpack')
const dayjs = require('dayjs')
const args = require('minimist')(process.argv.slice(2))
const apps = require('./apps')

const resolve = dir => path.join(__dirname, dir)
const enableSourceMap = Boolean(Number(process.env.VUE_APP_SOURCEMAP))
const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
const isProd = process.env.NODE_ENV === 'production'
const buildApp = args.app || false

const pages = {}
const aliases = []
const rewrites = []

// 判断单 app 打包模式时入参是否正确
if (buildApp && !apps.includes(buildApp)) {
  error(`app "${buildApp}" does not exist.`)
  process.exit(1)
}

for (const app of apps) {
  const dir = `./src/apps/${app}`
  const entry = `${dir}/index.js`
  const template = `${dir}/index.html`
  const upper = app.toUpperCase()

  // 多页入口
  pages[app] = {
    entry,
    template,
    filename: `${app}.html`,
    title: process.env[`VUE_APP_TITLE_${upper}`] || upper,
    chunks: [
      'chunk-vendors',
      'chunk-common',
      app
    ]
  }

  // 路径别名
  aliases.push({
    key: app,
    val: resolve(dir)
  })

  // rewrites
  rewrites.push({
    from: new RegExp(`^\\/${app}(\\/?$|\\/[^.]+$)`),
    to: `/${app}.html`
  })
}

// 两种打包模式后置修正
if (buildApp) {
  // 1. app单打包模式
  // 仅保留一个page入口，并重命名入口 html 为index.html
  pages[buildApp].filename = 'index.html'
  Object.keys(pages).forEach(key => {
    if (key !== buildApp) {
      delete pages[key]
    }
  })
} else {
  // 2. 默认打包模式
  // 生产环境上SPA模式修正
  const pageProps = Object.keys(pages)
  if (isProd && pageProps.length === 1) {
    pages[pageProps[0]].filename = 'index.html'
  }
}

module.exports = {
  pages,
  publicPath: '/',
  outputDir: buildApp ? `dist.apps/${buildApp}` : 'dist',
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

const isProd = process.env.NODE_ENV === 'production'
const plugins = []

// 支持可选链操作符(?.)
plugins.push([
  '@babel/plugin-proposal-optional-chaining',
  {
    loose: false
  }
])

// 支持空值合并操作符(??)
plugins.push([
  '@babel/plugin-proposal-nullish-coalescing-operator',
  {
    loose: false
  }
])

// 生产环境清除 console
// 依赖包：npm i -D babel-plugin-transform-remove-console
if (isProd) {
  plugins.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}

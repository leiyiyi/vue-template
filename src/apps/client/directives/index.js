/**
 * 单侧应用指令自动引入
 * @file /src/apps/xxx/directives/index.js
 */

import Vue from 'vue'

const context = require.context('./modules', false, /^\.\/\w+\.js$/)

context.keys().forEach(item => {
  const [, name] = /^\.\/(\w+)\.js$/.exec(item)
  Vue.directive(name, context(item).default)
})

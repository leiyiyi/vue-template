/**
 * 全局指令自动引入
 * @file /src/directives/index.js
 */

import Vue from 'vue'

const context = require.context('./modules', false, /^\.\/\w+\.js$/)

context.keys().forEach(item => {
  const [, name] = /^\.\/(\w+)\.js$/.exec(item)
  Vue.directive(name, context(item).default)
})

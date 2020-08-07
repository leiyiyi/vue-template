/**
 * 全局过滤器自动引入
 * @file /src/filters/index.js
 */

import Vue from 'vue'

const context = require.context('./modules', false, /^\.\/\w+\.js$/)

context.keys().forEach(item => {
  const [, name] = /^\.\/(\w+)\.js$/.exec(item)
  Vue.filter(name, context(item).default)
})

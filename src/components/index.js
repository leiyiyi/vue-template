/**
 * 全局组件自动引入
 * @file /src/components/index.js
 */

import Vue from 'vue'

// 忽略名单（目录名）
const ignoreList = []
const context = require.context('.', true, /\/(\w+)\/index\.vue$/)

context.keys().forEach(item => {
  const [, name] = /\/(\w+)\/index\.vue$/.exec(item)
  if (!ignoreList.includes(name)) {
    const component = context(item).default
    Vue.component(component.name || name, component)
  }
})

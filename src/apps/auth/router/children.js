/**
 * 自动引入分布式子路由
 * @file /src/apps/xxx/router/children.js
 */

const context = require.context('../views/', true, /(\/\w+)?\/router\.js$/)

export default context.keys().reduce((pre, cur) => {
  const item = context(cur).default
  return item
    ? Array.isArray(item)
      ? [...pre, ...item]
      : [...pre, item]
    : pre
}, [])

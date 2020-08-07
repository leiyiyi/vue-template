/**
 * vuex modules 自动引入
 * @file /src/appx/xxx/store/modules/index.js
 */

const context = require.context('./', false, /^\.\/(?!index)\w+\.js$/)

export default context.keys().reduce((pre, cur) => ({
  ...pre,
  [/^\.\/(\w+)\.js$/.exec(cur)[1]]: context(cur).default
}), {})

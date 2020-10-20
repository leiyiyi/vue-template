/**
 * 单侧应用组件自动引入
 * @file /src/apps/xxx/components/index.js
 */
const context = require.context('.', true, /\/\w+\/index\.vue$/)
const result = new Map()
const ignoreList = []

context.keys().forEach(item => {
  const [, name] = /\/(\w+)\/index\.vue$/.exec(item)
  if (!ignoreList.includes(name)) {
    const component = context(item).default
    const componentName = component.name || name
    result.set(componentName, component)
  }
})

export default result

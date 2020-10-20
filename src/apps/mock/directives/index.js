/**
 * 单侧应用指令自动引入
 * @file /src/apps/xxx/directives/index.js
 */
const context = require.context('./modules', false, /^\.\/\w+\.js$/)
const result = new Map()
const ignoreList = []

context.keys().forEach(item => {
  const [, name] = /^\.\/(\w+)\.js$/.exec(item)
  if (!ignoreList.includes(name)) {
    const directive = context(item).default
    const directiveName = directive.name || name
    result.set(directiveName, directive)
  }
})

export default result

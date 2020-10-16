const glob = require('glob')
const apps = []

// 多应用
glob.sync('./src/apps/*/index.js', {
  noDir: true
}).forEach(entry => {
  const [, name] = /^\.\/src\/apps\/(\w+)\/index\.js$/.exec(entry)
  name && apps.push(name)
})

module.exports = apps

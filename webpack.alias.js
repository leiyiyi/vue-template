/**
 * webstorm下正确识别路径别名的配置文件
 * 设置路径：
 * Settings > Languages & Frameworks > JavaScript > Webpack
 */

const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@auth': resolve('./src/auth')
    }
  }
}

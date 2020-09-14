const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

// mock数据目录
const dataRoot = resolve('../data')
const folderRequired = [
  'name',
  'order'
]
const fileRequired = [
  'name',
  'order',
  'path',
  'method',
  'status',
  'request',
  'response'
]

module.exports = {
  dataRoot,
  folderRequired,
  fileRequired
}

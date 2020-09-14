const fs = require('fs')
const path = require('path')
const { dataRoot, folderRequired, fileRequired } = require('../config')

const parseDir = dir => {
  let nodes = []
  const INIT_DEPTH = 0
  const INDEX_FILE = 'index.js'
  const sort = a => a === INDEX_FILE ? -1 : 1
  const walk = (dir, depth, result) => {
    // 读取当前目录（目录、文件）
    let items = fs.readdirSync(dir)
    if (depth === INIT_DEPTH) {
      items = items.filter(v => /^\w+$/.test(v))
    } else {
      nodes = depth === INIT_DEPTH + 1
        ? [path.basename(dir)]
        : [...nodes, path.basename(dir)]
      items = items.includes(INDEX_FILE)
        ? items.filter(v => /^\w+(\.js)?$/.test(v)).sort(a => sort(a))
        : []
    }
    for (const item of items) {
      const itemPath = path.join(dir, item)
      const stats = fs.statSync(itemPath)
      if (stats.isDirectory()) {
        const child = walk(itemPath, depth + 1, result)
        if (depth === INIT_DEPTH) {
          result.push(child)
        } else {
          result.children.push(child)
        }
      } else {
        const content = require(itemPath)
        if (item === INDEX_FILE) {
          result = {
            ...content,
            nodes,
            type: 'folder',
            items: [],
            children: []
          }
        } else {
          result.items.push({
            ...content,
            nodes: [...nodes, path.basename(item, '.js')],
            type: 'file'
          })
        }
      }
    }
    return result
  }
  return walk(dir, INIT_DEPTH, [])
}

// console.log(JSON.stringify(parseDir(dataRoot)))

module.exports = parseDir(dataRoot)

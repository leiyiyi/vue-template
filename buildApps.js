/**
 * 应用并行独立打包器
  */
const { info, done, error } = require('@vue/cli-shared-utils')
const concurrently = require('concurrently')
const apps = require('./apps')
const commands = apps && apps.reduce((pre, cur) => [...pre, `npm:build:app ${cur}`], [])

// 并行打包
info(`start building apps: ${apps.join(', ')}`)
concurrently(commands)
  .then(() => {
    done('build success')
  }, () => {
    error('build fail')
  })

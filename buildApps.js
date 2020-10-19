/**
 * 应用并行独立打包器
 */
const { info, done, error } = require('@vue/cli-shared-utils')
const concurrently = require('concurrently')
const args = require('minimist')(process.argv.slice(2))
const apps = require('./apps')
const { mode = 'prod' } = args
const envs = ['dev', 'test', 'stg', 'prod']
const commands = apps && apps.reduce((pre, cur) => [...pre, `npm:build:app:${mode} ${cur}`], [])

if (!envs.includes(mode)) {
  error(`mode ${mode} undefined`)
  process.exit(1)
}

// 并行打包
info(`start building apps: ${apps.join(', ')}, under ${mode} mode`)
concurrently(commands)
  .then(() => {
    done('build success')
  }, () => {
    error('build fail')
  })

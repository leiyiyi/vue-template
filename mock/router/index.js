const Router = require('@koa/router')
const data = require('./generate')
const router = new Router()

const apiList = (data => {
  let result = []
  const parse = data => {
    for (const item of data) {
      if (item.items && item.items.length) {
        result = [...result, ...item.items]
      }
      if (item.children && item.children.length) {
        parse(item.children)
      }
    }
    return result
  }
  return parse(data)
})(data)

console.log(JSON.stringify(data))
console.log(JSON.stringify(apiList))

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello Koa!'
  })
  .get('/tree', (ctx, next) => {
    ctx.body = data
  })
  // .post('/api/auth/login', (ctx, next) => {
  //   ctx.body = 'Auth Login'
  // })

apiList.forEach(api => {
  router[api.method](api.path, (ctx, next) => {
    ctx.body = api.path + 'xxxlulaoban'
  })
})

module.exports = router

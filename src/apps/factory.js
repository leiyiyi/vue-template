/**
 * 工厂方法创建App
 */
import { createApp, h } from 'vue'

const createMyApp = ({
  router = null,
  store = null,
  components = null,
  directives = null,
  globalProperties = null,
  root,
  ...options
}) => {
  const app = createApp({
    render: () => h(root),
    ...options
  })
  if (globalProperties) {
    globalProperties.forEach((val, key) => {
      app.config.globalProperties[key] = val
    })
  }
  if (components) {
    components.forEach((val, key) => {
      app.component(key, val)
    })
  }
  if (directives) {
    directives.forEach((val, key) => {
      app.directive(key, val)
    })
  }
  if (router) {
    app.use(router)
  }
  if (store) {
    app.use(store)
  }
  // app.config.errorHandler = (err, vm, info) => {
  //   // handle error
  //   // `info` is a Vue-specific error info, e.g. which lifecycle hook
  //   // the error was found in
  // }
  // app.config.warnHandler = function(msg, vm, trace) {
  //   // `trace` is the component hierarchy trace
  // }
  return app
}

export default createMyApp

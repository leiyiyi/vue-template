import { createApp, h } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
import store from './store'
// 全端全局
import globalComponents from '../../components'
// import '../../directives'
// import '../../filters'
// 单端全局
import appComponents from './components'
// import './directives'
// import './filters'
// 单侧应用启动
import './startup'

const app = createApp({
  render: () => h(RouterView)
})

// 注册全局组件
new Map([
  ...globalComponents,
  ...appComponents
]).forEach((val, key) => {
  app.component(key, val)
})

// 注册router/vuex
app.use(router)
app.use(store)

console.log('app', app, app.$router)

// 挂载
app.mount('body')

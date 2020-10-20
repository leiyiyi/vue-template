/**
 * 单侧应用入口
 */
import { RouterView } from 'vue-router'
import createMyApp from '../factory'
import router from './router'
import store from './store'
import { components } from './startup'

// 创建应用
createMyApp({
  router,
  store,
  components,
  root: RouterView
}).mount('body')

// import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
//
// createApp(App).use(store).use(router).mount('#app')

/**
 * 单侧应用入口
 */
import createMyApp from '../factory'
import router from './router'
import store from './store'
// import { components } from './startup'

// 创建应用
createMyApp({
  router,
  store,
  root: App
  // components
}).mount('#app')

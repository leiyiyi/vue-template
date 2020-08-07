import Vue from 'vue'
import app from './index.vue'
import router from './router'
import store from './store'
// 全端全局
import '../../components'
import '../../directives'
import '../../filters'
// 单端全局
import './components'
import './directives'
import './filters'
// 单侧应用启动
import './startup'

Vue.config.productionTip = false

;(async () => {
  new Vue({
    router,
    store,
    render: h => h(app)
  }).$mount('#app')
})()

import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@/config/router'
import { appName } from '../common/env'
import children from './children'
import errors from './errors'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: {
      render: h => h('router-view')
    },
    redirect: {
      name: 'home'
    },
    children: [
      ...children,
      ...errors
    ]
  }
]

export default new VueRouter({
  ...config(appName),
  routes
})

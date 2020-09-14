import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@/config/router'
import { appName } from '../common/env'
import children from './children'
import errors from './errors'
import Layout from '../components/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: {
      name: 'list'
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

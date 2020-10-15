import { createRouter } from 'vue-router'
import { appName } from '../common/env'
import config from '@/config/router'
import children from './children'
// import errors from './errors'
import Layout from '../components/Layout'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: {
      name: 'layout'
    },
    children: [
      ...children
      // ...errors
    ]
  }
]

export default createRouter({
  ...config(appName),
  routes
})

import { h } from 'vue'
import { RouterView, createRouter } from 'vue-router'
import { appName } from '../common/env'
import config from '@/config/router'
import children from './children'
import errors from './errors'

const routes = [
  {
    path: '/',
    name: 'root',
    component: {
      render: () => h(RouterView)
    },
    redirect: {
      name: 'layout'
    },
    children: [
      ...children,
      ...errors
    ]
  }
]

export default createRouter({
  ...config(appName),
  routes
})

/**
 * 路由配置设置
 */
import { createWebHistory } from 'vue-router'
import { isDev, baseUrl } from '@/common/env'

export default (base = '/') => ({
  history: createWebHistory(isDev ? base : baseUrl)
})

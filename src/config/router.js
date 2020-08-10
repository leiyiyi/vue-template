/**
 * 路由配置设置
 */
import { isDev, baseUrl } from '@/common/env'

export default (base = '/') => ({
  mode: 'history',
  base: isDev ? base : baseUrl
})

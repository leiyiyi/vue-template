import { createStore } from 'vuex'
import { isDev } from '@/common/env'
import modules from './modules'

export default createStore({
  strict: isDev,
  modules,
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

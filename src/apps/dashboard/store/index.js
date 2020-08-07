import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { isDev } from '@/common/env'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: isDev,
  modules,
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

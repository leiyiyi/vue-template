const state = {
  tabs: new Map([
    ['folder', {
      name: '接口列表',
      closeable: false
    }]
  ])
}

const getters = {
  tabLength: state => state.tabs.size
}

const mutations = {
  setTabs (state, payload) {
    state.tabs = payload
  }
}

const actions = {
  openTab ({ state, commit }, item) {
    console.log('item', item)
    const key = item.nodes.join('/')
    if (!state.tabs.has(key)) {
      state.tabs.set(key, item)
    }
    commit('setTabs', state.tabs)
    console.log(state.tabs)
  },
  closeTab ({ state, commit }, key) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

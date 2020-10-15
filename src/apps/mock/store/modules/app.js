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
    console.log('item', item, state.tabs)
    const copy = new Map(state.tabs)
    const key = item.nodes.join('/')
    if (!copy.has(key)) {
      copy.set(key, item)
    }
    commit('setTabs', copy)
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

import coins from '../../api/coins'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllCoins({ commit }) {
    coins.getTopCoins((coins) => {
      commit('setCoins', coins)
    })
  }
}

// mutations
const mutations = {
  setCoins(state, coins) {
    state.all = coins
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import axios from 'axios'

const apiUrl = `${process.env.VUE_APP_API_URL}/coins`

// initial state
const state = () => ({
  coins: [],
  limit: 10,
  offset: 0
})

// getters
const getters = {
  coins: (state) => {
    return state.coins
  },
  limit: (state) => {
    return state.limit
  },
  offset: (state) => {
    return state.offset
  }
}

// actions
const actions = {
  getAllCoins({ state, commit }) {
    axios
      .get(apiUrl, {
        params: {
          limit: state.limit,
          offset: state.offset
        }
      })
      .then((response) => {
        const coins = response.data.data.coins
        commit('setCoins', coins)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  updateLimit({ commit }, limit) {
    commit('setLimit', limit)
  },
  updateOffset({ commit }, offset) {
    commit('setOffset', offset)
  }
}

// mutations
const mutations = {
  setCoins(state, coins) {
    state.coins = coins
  },
  setLimit(state, limit) {
    state.limit = limit
  },
  setOffset(state, offset) {
    state.offset = offset
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

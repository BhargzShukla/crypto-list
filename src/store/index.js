import Vue from 'vue'
import Vuex from 'vuex'
import coins from './modules/coins'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    coins
  },
  strict: debug
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state, num) {
    state.count += num
  },
  reduce(state) {
    state.count--
  },
}

const getters = {
  newCount: (state) => {
    return state.count **2
  }
}

const actions = {
  addAction(context) {
    setTimeout(() => {
      context.commit('add', 5)
    }, 3000)
    console.log(1);
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
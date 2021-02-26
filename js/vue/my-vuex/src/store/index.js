import Vue from 'vue'
import Vuex from './myVuex'
// import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    getNum: (state) => {
      return state.num + 10
    }
  },
  mutations: {
    add:(state, arg) => {
      state.num += arg
    }
  },
  actions: {
    // actionAdd(context, arg) {
    //   // 解构会影响commit
    //   // { commit } == let commit = context.commit
    //   // 改进办法：commit改为箭头函数
    //   setTimeout(() => {
    //     context.commit('add', arg)
    //   }, 1000);
    // }
    actionAdd({ commit }, arg) {
      // 解构会影响commit
      // { commit } == let commit = context.commit
      // 改进办法：commit改为箭头函数
      setTimeout(() => {
        commit('add', arg)
      }, 1000);
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => {
  return {
    num: 0
  }
}

export const mutations = {
  addNum(state, action) {
    state.num += action
  }
}

export const actions = {
  // 加
  async add({ commit }, params = {}) {
    await commit('addNum', 2)
  }
}

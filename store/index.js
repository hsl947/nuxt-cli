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
    await commit('addNum', 1)
  },
  // 服务端的会话状态树，用于与客户端通信，比如获取session或cookie
  async nuxtServerInit(context) {
    await console.log(' nuxt服务器初始化...\n ')
  }
}

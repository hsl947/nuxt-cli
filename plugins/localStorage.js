// vuex持久化
import createPersistedState from 'vuex-persistedstate'

export default (context) => {
  createPersistedState({
    storage: window.localStorage
  })(context.store)
}

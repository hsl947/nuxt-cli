import Temp from './container.vue'

let instance

const UserModal = {
  install: (Vue) => {
    Vue.prototype.$UserModal = (options) => {
      if (instance && !options) {
        instance.isShow = options
        document.body.removeChild(instance.vm.$el)
        instance = null
        return
      }
      const Container = Vue.extend(Temp)
      instance = new Container()
      instance.isShow = options
      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
    }
  }
}

export default UserModal

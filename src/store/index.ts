import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'codewhy',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login //注册模块
  }
})

export default store

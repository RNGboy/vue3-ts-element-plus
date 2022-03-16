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

// 刷新初始化时调用该api,防止本地利用缓存登陆但vuex数据缺失
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export default store

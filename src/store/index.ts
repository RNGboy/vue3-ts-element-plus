import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

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
    login, //注册模块
    system
  }
})

// 刷新初始化时调用该api,防止本地利用缓存登陆但vuex数据缺失
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

// 解决vuex对typescript的支持较差的类型检查,例如导出store的类型类型检查及子模块类型检查
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

import { Module } from 'vuex'
import { ILoginState, IRootState } from '../types'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  // 改变state里的状态只能用mutation
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('手机账号登陆逻辑')
    }
  }
}

export default loginModule

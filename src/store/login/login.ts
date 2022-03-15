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
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('手机账号登陆')
    }
  }
}

export default loginModule

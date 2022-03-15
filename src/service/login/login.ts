import hyRequest from '../index'
import { IAccount } from './type'

// 枚举相关的URL
enum LoginApi {
  AccountLogin = '/login'
}

export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  })
}

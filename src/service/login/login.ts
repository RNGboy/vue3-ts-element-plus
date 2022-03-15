import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

// 枚举相关的URL
enum LoginApi {
  AccountLogin = '/login'
}

export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

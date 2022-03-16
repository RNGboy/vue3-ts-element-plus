import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

// 枚举相关的URL
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法:/users/1
  UserMenus = '/role/' //  用法:role/1/menu
}

// 用户登陆
export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return hyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return hyRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}

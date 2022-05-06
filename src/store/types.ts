import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permission: string[]
}

export interface IRootAndModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootAndModule

export interface IRootState {
  name: string
  age: number
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface IRootAndModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootAndModule

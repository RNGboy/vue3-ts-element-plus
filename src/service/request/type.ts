import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义hook接口拦截器类型
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
// 对AxiosRequestConfig做一些接口扩展
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T> //扩展了HYRequestInterceptors类型
  showLoading?: boolean
}

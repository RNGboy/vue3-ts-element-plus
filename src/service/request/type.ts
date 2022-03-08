import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义hook接口拦截器类型
export interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
// 对AxiosRequestConfig做一些接口扩展
export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors: HYRequestInterceptors //扩展了HYRequestInterceptors类型
}

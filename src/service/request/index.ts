import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加全局拦截器(所有实例)
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局拦截器:请求成功拦截')
        return config
      },
      (err) => {
        console.log('全局拦截器:请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('全局拦截器:响应成功拦截')
        return config
      },
      (err) => {
        console.log('全局拦截器:响应失败拦截')
        return err
      }
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest

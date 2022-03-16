import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
import { AxiosRequestConfig } from 'axios'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    //拦截器,可传可不传
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest

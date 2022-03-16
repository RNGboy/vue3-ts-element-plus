import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
import { setupStore } from '@/store/index'

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App).use(ElementPlus).use(store).use(router)
setupStore()
app.mount('#app')

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独相应的res')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res)
//   })

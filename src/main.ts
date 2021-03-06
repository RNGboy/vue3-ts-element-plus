import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
import { setupStore } from '@/store/index'
import { globalRegister } from './global'

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App).use(ElementPlus).use(store)

globalRegister(app)
// 此处setupStore和app.use(router)执行顺行替换会出现路由无法匹配到组件,
// 涉及路由注册函数install和匹配同步执行, 可以查看实战章节八,开局讲述原因
setupStore()
app.use(router)

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

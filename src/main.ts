import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

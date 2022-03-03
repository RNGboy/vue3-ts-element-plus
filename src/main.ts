import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

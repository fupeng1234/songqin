import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const elConfig={local:zhCn,size:'small',zIndex:3000}

createApp(App).use(store).use(router).use(ElementPlus,elConfig).mount('#app')
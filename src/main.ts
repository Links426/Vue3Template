import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import '@/assets/css/reset.css'

import router from '@/router/router'
import 'normalize.css'
import App from './App.vue'

// 引入iconfont
import '@/assets/font/iconfont.css'

createApp(App).use(createPinia()).use(router).mount('#app')

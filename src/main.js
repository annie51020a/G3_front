//js入口執行檔案
import './assets/main.css'
import './assets/sass/_style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Vue.createAPP(APP).mount('#app')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

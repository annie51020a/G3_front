//js入口執行檔案
import './assets/sass/_style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Vue.createAPP(APP).mount('#app')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// 初始化 AOS
AOS.init();


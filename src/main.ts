import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
const store = createPinia()
import './style.css'

createApp(App).use(router).use(store).mount('#app')

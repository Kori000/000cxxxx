import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'animate.css';
import { createPinia } from 'pinia';
import scrollreveal from "scrollreveal";





const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(scrollreveal)
app.mount('#app')

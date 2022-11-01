/*
 * @Author: Kori
 * @Date: 2022-10-28 16:57:35
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 16:42:24
 * @FilePath: /portalverse_offcial/src/main.js
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia';
import scrollreveal from "scrollreveal";


const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(scrollreveal)
app.mount('#app')

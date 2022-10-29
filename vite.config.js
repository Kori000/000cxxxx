/*
 * @Author: Kori
 * @Date: 2022-10-28 16:57:35
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-28 18:48:59
 * @FilePath: /portalverse_offcial/vite.config.js
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

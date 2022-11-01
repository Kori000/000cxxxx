/*
 * @Author: Kori
 * @Date: 2022-11-01 09:46:18
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 15:08:45
 * @FilePath: /portalverse_offcial/src/store/modules/home.js
 * @Description: 
 * 
 */
import { defineStore } from 'pinia';

const HomeStore = defineStore("/home", {
  state: () => ({
    homeInfo: { a: 2 }
  }),
  getters: {
  },
  actions: {
    updateHomeInfo (info) {
      this.homeInfo = info
    }
  },
})
export default HomeStore

/*
 * @Author: Kori
 * @Date: 2022-11-01 09:27:04
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 10:58:59
 * @FilePath: /portalverse_offcial/src/utils/request.js
 * @Description: 
 * 
 */
import theAxios from 'axios';

const axios = theAxios.create({
  baseURL: 'http://192.168.0.100:8080',
  // baseURL: 'http://127.0.0.1:4523/m1/1854581-0-default',
  timeout: 20000
})

export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}

import request from '@/utils/request';

// 获取文章新闻推荐
export const getHomeInfoAPI = () => request({
  url: '/api/home/all',
})

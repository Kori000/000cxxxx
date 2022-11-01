/*
 * @Author: Kori
 * @Date: 2022-11-01 17:39:34
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 17:40:20
 * @FilePath: /portalverse_offcial/src/utils/scrollAnimate.js
 * @Description: 
 * 
 */
scrollRev.reveal({
  // 动画的时长
  // duration: 1500,
  // 延迟时间
  // delay: 800,
  // 动画开始的位置，'bottom', 'left', 'top', 'right'
  // origin: 'top',
  // 回滚的时候是否再次触发动画
  reset: false,
  // 在移动端是否使用动画
  mobile: false,
  // 滚动的距离，单位可以用%，rem等
  // distance: '200px',
  // 其他可用的动画效果
  opacity: 0.001,
  easing: 'linear',
  scale: 1,
})

scrollRev.reveal('.reval-in', {
  origin: 'bottom',
  duration: 2500,
  delay: 300,
})
scrollRev.reveal('.reval-rightmove', {
  origin: 'right',
  duration: 1700,
  delay: 900,
  distance: '100px',

})

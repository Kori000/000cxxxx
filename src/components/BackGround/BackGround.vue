<!--
 * @Author: Kori
 * @Date: 2022-10-29 12:19:38
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 17:00:28
 * @FilePath: /portalverse_offcial/src/components/BackGround/BackGround.vue
 * @Description: 
 * 
-->
<template>
  <div class=" max-w-[1440px]  relative ml-auto mr-auto">
    <!-- 球体 -->
    <div class="absolute top-[197px] right-[171px] z-[1]">
      <!-- 大球 -->
      <img src="@/assets/main-sphere.png" class="reval-ini max-w-[45vw]">
      <img class="absolute -top-[33px] -left-[52px]" src="@/assets/small-spheres.png">
      <img class="absolute -top-[144px] left-[325px]" src="@/assets/small-spheres.png">
      <img class="absolute top-[46px] -right-[128px]" src="@/assets/small-spheres.png">
      <img class="absolute bottom-[53px] -right-[105px]" src="@/assets/small-spheres.png">
    </div>
    <!-- 椭圆渐变块 -->
    <!-- .gradient-sllipse---自定义tailwind -->
    <div class=" absolute top-[7336px] left-[380px] 
      w-[751px] h-[789px] 
      gradient-ellipse 
       blur-[400px]">
    </div>
    <div class=" absolute top-[89px] -right-[18.5px] 
      w-[613px] h-[613px] 
      gradient-ellipse 
      blur-[250px]">
    </div>
    <div class=" absolute top-[4426px] -right-[120px] 
      w-[366px] h-[385px] 
      gradient-ellipse 
      blur-[125px]">
    </div>
    <div class=" absolute top-[4975px] -left-[192px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px] ">
    </div>
    <div class=" absolute top-[5543px] -right-[277px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px] ">
    </div>
    <div class=" absolute top-[3082px] -left-[242px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px] ">
    </div>
    <div class=" absolute top-[2204px] -right-[211px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px] ">
    </div>
    <div class="absolute top-[1004px] -left-[137px] 
    w-[667px] h-[667px]
      bg-[#17002B] filter blur-[252px]">
    </div>
    <div class="absolute top-[892px] -left-[121px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px] ">
    </div>
    <div class="absolute top-[6261px] -left-[529px] 
    w-[933px] h-[981px]
    gradient-ellipse 
      blur-[400px] ">
    </div>
    <div class="absolute top-[5286px] -right-[461px] 
    w-[734px] h-[772px]
    gradient-ellipse 
      blur-[400px] ">
    </div>
    <div class="absolute top-[1949px] -right-[315px] 
    w-[734px] h-[772px]
    gradient-ellipse 
      blur-[400px] ">
    </div>
    <div class="absolute top-[2886px] -left-[498px] 
    w-[734px] h-[772px]
    gradient-ellipse 
      blur-[400px] ">
    </div>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
const scrollRev = scrollReveal()
onMounted(() => {
  scrollRev.reveal('.reval-ini', {
    // 动画的时长
    duration: 2600,
    // 延迟时间
    delay: 1700,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 在移动端是否使用动画
    mobile: false,
    // 滚动的距离，单位可以用%，rem等
    // 其他可用的动画效果
    opacity: 0.001,
    easing: 'linear',
    scale: 1,
  })
})



</script>

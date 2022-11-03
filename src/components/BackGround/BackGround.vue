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
    <div class="absolute top-[197px] right-[171px] z-[1] lg:block hidden ">
      <!-- 大球 -->
      <img src="@/assets/main-sphere.png" class="reval-ini max-w-[45vw]">
      <!-- 小球 -->
      <img class="absolute -top-[33px] -left-[52px] reval-to-right custom-sphere-one" src="@/assets/small-spheres.png">
      <img class="absolute -top-[144px] left-[325px]  custom-sphere-two" src="@/assets/small-spheres.png">
      <img class="absolute top-[46px] -right-[128px] custom-sphere-third" src="@/assets/small-spheres.png">
      <img class="absolute bottom-[53px] -right-[105px] custom-sphere-four" src="@/assets/small-spheres.png">
    </div>

    <!-- 椭圆渐变块 -->
    <!-- .gradient-sllipse---自定义tailwind -->
    <div class=" absolute top-[7336px] left-[380px] 
      w-[751px] h-[789px] 
      gradient-ellipse 
       blur-[400px] ">
    </div>

    <div class=" absolute top-[89px] -right-[18.5px] 
      w-[613px] h-[613px] 
      gradient-ellipse 
      blur-[250px]
      lg:block
      hidden
      custom-halo-in
      ">
    </div>


    <!-- 移动端显示的球体 -->
    <div class="
     md:hidden
     absolute top-[805px] left-1/2 -translate-x-1/2
    w-[239px] h-[286px]
    gradient-ellipse-mb
      blur-[100px]
      z-10 
      custom-halo-in
      ">
    </div>

    <div class="
     md:hidden
     absolute top-[2314px] -right-[198px]
    w-[339px] h-[336px]
    gradient-ellipse-mb
      blur-[200px]
       ">
    </div>
    <div class="
     md:hidden
     absolute top-[3901px] -left-[141px]
    w-[339px] h-[336px]
    gradient-ellipse-mb
      blur-[200px]
      z-10 ">
    </div>
    <div class="
     md:hidden
     absolute top-[5101px] -right-[151px]
    w-[239px] h-[236px]
    gradient-ellipse-mb
      blur-[200px]
      z-10 ">
    </div>
    <div class="
     md:hidden
     absolute top-[725px] -right-[198px]
    w-[239px] h-[236px]
    gradient-ellipse-mb
      blur-[200px]
      z-10 ">
    </div>



    <!-- web显示的光晕 -->
    <div class="hidden md:block  absolute top-[4426px] -right-[120px] 
      w-[366px] h-[385px] 
      gradient-ellipse 
      blur-[125px]  reval-in-halo">
    </div>
    <div class="hidden md:block  absolute top-[4975px] -left-[192px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px]  reval-in-halo">
    </div>
    <div class="hidden md:block  absolute top-[5543px] -right-[277px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px]  reval-in-halo">
    </div>
    <div class="hidden md:block  absolute top-[3082px] -left-[242px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px]  reval-in-halo">
    </div>
    <div class="hidden md:block  absolute top-[2204px]  -right-[198px] 
    w-[366px] h-[385px]
    gradient-ellipse 
    blur-[400px] reval-in-halo
    ">
    </div>
    <div class="hidden md:block absolute top-[1004px] -left-[137px] 
    w-[667px] h-[667px]
      bg-[#17002B] filter blur-[252px] reval-in-halo">
    </div>
    <div class="
    hidden md:block
    absolute top-[892px] -left-[121px] 
    w-[366px] h-[385px]
    gradient-ellipse 
      blur-[125px]  reval-in-halo">
    </div>
    <div class="hidden md:block absolute top-[6261px] -left-[529px] 
    w-[933px] h-[981px]
    gradient-ellipse 
      blur-[400px] reval-in-halo ">
    </div>
    <div class="hidden md:block absolute top-[5286px] -right-[461px] 
    w-[734px] h-[772px]
    gradient-ellipse 
      blur-[400px]  reval-in-halo">
    </div>
    <div class="hidden md:block absolute 
    top-[2514px] -right-[198px] 
    w-[734px] h-[772px]
    gradient-ellipse 
   
    blur-[400px]  reval-in-halo">
    </div>
    <div class="hidden md:block absolute top-[2886px] -left-[498px] 
    w-[734px] h-[772px]
    gradient-ellipse 
      blur-[400px]  reval-in-halo">
    </div>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
const scrollRev = scrollReveal()
onMounted(() => {

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
  scrollRev.reveal('.reval-ini', {
    // 动画的时长
    duration: 2600,
    // 延迟时间
    delay: 1700,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'top',
  })
  scrollRev.reveal('.reval-in-halo', {
    origin: 'bottom',
    duration: 1000,
    delay: 300,
  })
})

</script>

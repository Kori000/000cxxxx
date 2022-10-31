<!--
 * @Author: Kori
 * @Date: 2022-10-29 21:54:44
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-31 14:54:45
 * @FilePath: /portalverse_offcial/src/components/HeroCenter/HeroCenter.vue
 * @Description: 
 * 
-->
<template>
  <div class="mb-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-start flex-col  min-h-screen">
      <!-- 主体内容 -->
      <div id="hero_main" class=" w-full text-white  z-10 pt-52  max-w-2xl ">
        <h5 class=" text-xl font-medium leading-6">Portalverse Network</h5>
        <!-- 大标题+动画 -->
        <h1
          class=" text-8xl font-bold leading-[130px] tracking-wide text-left linear-color animate-linear-color-animat">
          Decentralized Real-Time Cloud Gaming</h1>
        <div id="btn_com" class=" flex mt-12 font-bold text-lg">
          <button class="w-72 h-16 rounded-[20px] mr-2
          btn-gradient
           ">Join Discord</button>
          <button class="flex justify-evenly items-center w-60 h-14">
            <p>Read Whitepaper</p>
            <div class="">
              <img src="@/assets/svg/RightArrow.svg">
            </div>
          </button>
        </div>
      </div>
      <div id="hero_describe" class=" z-10 mt-2 min-h-[94px] self-end max-w-lg flex py-2 items-center">
        <span class="border-white border-r-2 h-20"></span>
        <h6 class="text-white text-2xl font-semibold leading-8 pl-12">Harnessing Distributed and Underutilised Computing
          Powers
          to form a Computing
          Infrastructure
          Layer
          for the
          Metaverse
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

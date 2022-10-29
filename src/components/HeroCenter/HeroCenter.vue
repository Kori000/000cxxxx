<!--
 * @Author: Kori
 * @Date: 2022-10-29 21:54:44
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-30 03:58:19
 * @FilePath: /portalverse_offcial/src/components/HeroCenter/HeroCenter.vue
 * @Description: 
 * 
-->
<template>
  <div class="w-screen z-10 flex justify-center ">
    <div class="fixed ">
      <Navigation class="w-screen h-[104px] "></Navigation>
    </div>
    <div id="hero_container" class=" w-[1164.5px] h-[654px] mt-[243px] relative">
      <div id="hero_main" class=" w-[700px] h-[551px] absolute top-0 left-0 flex flex-col ">
        <h5 class="text-white font-medium font-Inter-500 text-[22px]">Portalverse Network</h5>
        <!-- 动画 -->
        <h1 class="text-[100px] font-bold font-Inter text-transparent bg-gradient-to-r from-[#BBBBFF] via-[#ffffff]  to-[#BBBBFF] 
           bg-200% animate-linear-color bg-clip-text">
          Decentralized Real-Time Cloud Gaming</h1>
        <div
          class="h-[64px] w-[541px] max-w-[541px] absolute bottom-0 left-0 flex justify-between items-center text-white font-bold font-Inter-700 text-lg">
          <button class="w-[281px] h-[64px] 
          bg-gradient-to-r from-[#75DAF3] via-[#4553F2] to-[#7623F5] 
           rounded-[20px]">Join Discord</button>
          <button class="flex justify-evenly items-center w-[235px] h-[54px]">
            <p>Read Whitepaper</p>
            <div class="">
              <img src="@/assets/svg/RightArrow.svg">
            </div>
          </button>
        </div>
      </div>
      <div id="hero_describe"
        class=" w-[523px] h-[94px] absolute bottom-0 right-0 text-white font-Inter-500 font-semibold leading-[31px]  before:content-[' '] before:border-r before:border before:w-[84px] before:absolute before:top-[5px] before:left-0 before:rotate-90 before:origin-top-left before:mb-[10px]">
        <h6 class="text-[26px] pl-[17px] ">Harnessing Distributed and Underutilised Computing Powers
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
import Navigation from "@/components/HeroCenter/Navigation/Navigation.vue";

</script>

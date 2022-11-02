<!--
 * @Author: Kori
 * @Date: 2022-10-29 21:57:51
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-31 17:24:23
 * @FilePath: /portalverse_offcial/src/components/PlayerBenefits/PlayerBenefits.vue
 * @Description: 
 * 
-->
<template>
  <div class="mb-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col  lg:min-h-[830px] min-h-[353px]">
      <div class=" flex flex-col flex-wrap justify-between items-center max-w-[1275px] ">
        <h3 class="font-semibold sm:text-6xl text-[42px] leading-10 linear-color animate-linear-color-animat ">Features
        </h3>
        <div class="flex justify-around  mt-20 sm:mt-40  mx-auto flex-wrap  xl:flex-nowrap">
          <div
            class="sm:h-[397px] mx-7  w-[354px] sm:w-[276px]  flex flex-row sm:flex-col  justify-between items-center mb-14 xl:mb-0"
            v-for="i in features">

            <div class="sm:w-[134px] w-[108px] h-full">
              <img :src="i.icon" class="block sm:w-[134px] w-[134px] sm:h-[134px] h-[108px]">
            </div>

            <div
              class="text-center sm:min-h-[201px] min-h-[223px] w-[222px] sm:w-[280px] max-w-[280px] z-10 flex flex-col justify-between">
              <h6 class="text-white font-semibold text-2xl leading-8  sm:text-center text-start">{{ i.tittle }}
              </h6>
              <p class="text-[#DCDCDCCC] font-medium  leading-8 sm:text-center text-start">{{ i.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const features = reactive([
  {
    tittle: 'P2P Game Streaming',
    text: 'Decentralised rendering of games will lead to lower latency and the ability for the service to scale with demand.',
    icon: 'src/assets/Player-logo-1.png'
  },
  {
    tittle: 'Optimized Experience',
    text: 'Developers can focus quality metaverse experiences without hardware limitations and a consistent development workflow.',
    icon: 'src/assets/Player-logo-2.png'
  },
  {
    tittle: 'Removing Hardware Limits',
    text: 'Device constraints are no longer an issue when cloud streaming. Complex experiences are rendered in the cloud.',
    icon: 'src/assets/Player-logo-3.png'
  },
  {
    tittle: 'Existing Powerful Network',
    text: 'The most common graphics cards being used for mining were built for gaming. Making them fit for purpose without significant changes.',
    icon: 'src/assets/Player-logo-4.png'
  }

])
</script>


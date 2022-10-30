<!--
 * @Author: Kori
 * @Date: 2022-10-29 21:56:43
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-31 01:54:43
 * @FilePath: /portalverse_offcial/src/components/MissionSection/MissionSection.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <div class="lg:mx-36 mx-12 flex justify-center items-start flex-col  min-h-screen">
      <div id="border-line"
        class="relative border-b-0 border h-[841px] w-full rounded-3xl border-gradient flex justify-center items-end ">
        <div id="text-container" class="w-full h-[726px] max-w-[1060px] flex flex-col justify-between items-center">
          <div id="top-content"
            class=" max-w-[1026px] w-full flex justify-between flex-col items-center xl:items-end xl:flex-row ">
            <div id="top-content-left" class=" w-full max-w-[619px] h-full flex flex-col ">
              <h5 class="text-white font-medium text-xl min-w[558px]">Our Vision</h5>
              <h3
                class="linear-color animate-linear-color-animat font-semibold text-6xl text-start min-w-[470px] leading-[66px] mt-10">
                Community Driven
                Real-Time
                Rendering
                for the Metaverse</h3>
            </div>
            <div id="top-content-right" class=" max-w-[438px]">
              <svg width="432" height="2" class="mb-4" viewBox="0 0 432 2" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="432" y2="1" stroke="url(#paint0_linear_2687_2153)" />
                <defs>
                  <linearGradient id="paint0_linear_2687_2153" x1="2.99999" y1="3.49682" x2="432.5" y2="1.99801"
                    gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="0.233171" stop-color="#5148F3" />
                    <stop offset="0.535694" stop-color="#75DBF4" />
                    <stop offset="0.779572" stop-color="#7723F6" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
              <h5 class="text-white font-medium text-xl text-center mb-3">Allow gamers to use any device they want to
                play
                demanding
                games and allow users
                with miners or domant
                computers to particplate in the network and be rewarded</h5>
            </div>
          </div>
          <div id="bottom-card" class=" w-full h-[356px] flex justify-between items-center">
            <div v-for="i in cart"
              class=" relative h-[356px] w-[334px] bg-[#2B2B2B5C] rounded-2xl filter shadow-xl flex justify-center items-center">
              <div class=" absolute top-30 right-7  w-[200px] h-[246px]">
                <div class=" rounded-full bg-[#DC36F8] w-[72px] h-[68px] absolute top-0 left-0  filter blur-[53px]">
                </div>
                <div
                  class="rounded-full bg-[#8B36F8] w-[73px] h-[86px] absolute top-[168px] left-[127px]  filter blur-[53px]">
                </div>
              </div>
              <div class="z-10 flex flex-col justify-between items-center w-[254px] h-[206px] ">
                <h4 class="font-semibold text-4xl text-white">{{ i.title }}</h4>
                <img :src="i.url" class="h-1 w-[117px]">
                <p class="text-center leading-[175%] text-white font-medium text-base">{{ i.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const cart = reactive([
  {
    title: 'Players',
    text: 'Play with content in the metaverse of their terms without hardware limitations or latency issues',
    url: 'src/assets/Line-1.png'
  },
  {
    title: 'Players',
    text: 'Play with content in the metaverse of their terms without hardware limitations or latency issues',
    url: 'src/assets/Line-2.png'
  },
  {
    title: 'Players',
    text: 'Play with content in the metaverse of their terms without hardware limitations or latency issues',
    url: 'src/assets/Line-3.png'
  }
])
console.log(cart[1])
console.log()
</script>

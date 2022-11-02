<template>
  <div class="sm:mb-32 mb-16">
    <div class="lg:mx-36 md:mx-12  flex justify-center items-start flex-col min-h-screen py-24 px-2 ">
      <!-- custom-border-gradient -->
      <div id="border-line" class="relative  w-full rounded-3xl  px-[30px] flex justify-center items-start ">
        <slot></slot>
        <div id="text-container" class="w-full  max-w-[1060px] flex flex-col justify-between items-center">
          <div id="top-content"
            class=" max-w-[1026px] w-full flex justify-between flex-col items-center mt-[115px] xl:items-end xl:flex-row ">
            <div id="top-content-left" class=" w-full max-w-[619px] h-full flex flex-col items-center xl:items-start">
              <h5 class="reval-rightmove text-white font-medium text-xl min-w[558px] ">Our Vision</h5>
              <h3
                class="linear-color animate-linear-color-animat font-semibold text-4xl sm:text-6xl text-center xl:text-start  md:min-w-[470px] min-w-[350px] leading-10 sm:leading-[66px] mt-10">
                Community Driven
                Real-Time
                Rendering
                for the Metaverse</h3>
            </div>
            <div id="top-content-right"
              class="mt-7 xl:mt-0 sm:max-w-[438pxs] max-w-[315pxs] flex flex-col items-center ">
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
              <h5
                class="text-white font-medium text-xl text-center mt-6 xl:mt-0 mb-3 w-[325px] sm:w-[438px] min-h-[109px]">
                Allow gamers to use any
                device
                they want to
                play
                demanding
                games and allow users
                with miners or domant
                computers to particplate in the network and be rewarded</h5>
            </div>
          </div>
          <div id="bottom-card" class=" w-full  flex flex-row justify-around flex-wrap items-center mt-16 sm:mt-28">
            <div v-for="i in cart"
              class=" relative h-[356px] sm:w-[334px] w-full bg-[#2B2B2B5C] rounded-2xl filter shadow-xl flex justify-center items-center mb-6 ">
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
})



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
</script>

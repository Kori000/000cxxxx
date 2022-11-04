<template>
  <div class="mb-32 sm:mt-26 md:mt-40">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col  lg:min-h-[830px] min-h-[353px]">
      <div class=" flex flex-col flex-wrap justify-between items-center max-w-[1275px] ">
        <h3
          class="font-semibold sm:text-6xl text-[42px] leading-10 linear-color animate-linear-color-animat font-Inter-700 reval-bottommove-feature">
          Features
        </h3>
        <div class="flex justify-around  mt-20 sm:mt-40  mx-auto flex-wrap  xl:flex-nowrap">
          <div
            class="sm:h-[397px] mx-7  w-[354px] sm:w-[276px]  flex flex-row sm:flex-col  justify-between items-center mb-14 xl:mb-0"
            :class="'reval-bottommove-feature' + index" v-for="i,index in features">
            <!-- 横线 -->
            <img :src="i.rowLine" class="xl:block hidden w-[200px] absolute h-[2px] top-[73px] -right-[127px] ">
            <!-- 竖线 -->
            <img :src="i.colLine"
              class="sm:hidden block w-[200px] rotate-90 absolute h-[2px] bottom-[43px] -left-[45px] ">
            <div class="sm:w-[134px] w-[108px] h-full relative">

              <img :src="i.icon" class="block sm:w-[134px] w-[134px] sm:h-[134px] h-[108px]">
            </div>

            <div
              class="text-center sm:min-h-[201px] min-h-[223px] w-[222px] sm:w-[280px] max-w-[280px] z-10 flex flex-col justify-between font-Inter">
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
import Playerlogo1 from '../../assets/Player-logo-1.png';
import featureslinerow from '../../assets/features-line-row.png';
import featureslinecol from '../../assets/features-line-col.png';
import Playerlogo2 from '../../assets/Player-logo-2.png';
import Playerlogo3 from '../../assets/Player-logo-3.png';
import Playerlogo4 from '../../assets/Player-logo-4.png';



import scrollReveal from 'scrollreveal';
import { reactive, onMounted } from 'vue';

const scrollRev = scrollReveal()
onMounted(() => {

  scrollRev.reveal('.reval-bottommove-feature', {
    origin: 'bottom',
    duration: 1700,
    delay: 900,
    distance: '70px',
  })
  scrollRev.reveal('.reval-bottommove-feature0', {
    origin: 'bottom',
    duration: 1400,
    delay: 1350,
    distance: '140px',
  })
  scrollRev.reveal('.reval-bottommove-feature1', {
    origin: 'bottom',
    duration: 1600,
    delay: 1600,
    distance: '140px',
  })
  scrollRev.reveal('.reval-bottommove-feature2', {
    origin: 'bottom',
    duration: 1850,
    delay: 1900,
    distance: '140px',
  })
  scrollRev.reveal('.reval-bottommove-feature3', {
    origin: 'bottom',
    duration: 1850,
    delay: 2100,
    distance: '140px',
  })
})


const features = reactive([
  {
    tittle: 'P2P Game Streaming',
    text: 'Decentralised rendering of games will lead to lower latency and the ability for the service to scale with demand.',
    icon: Playerlogo1,
    rowLine: featureslinerow,
    colLine: featureslinecol
  },
  {
    tittle: 'Optimized Experience',
    text: 'Developers can focus quality metaverse experiences without hardware limitations and a consistent development workflow.',
    icon: Playerlogo2,
    rowLine: featureslinerow,
    colLine: featureslinecol
  },
  {
    tittle: 'Removing Hardware Limits',
    text: 'Device constraints are no longer an issue when cloud streaming. Complex experiences are rendered in the cloud.',
    icon: Playerlogo3,
    rowLine: featureslinerow,
    colLine: featureslinecol

  },
  {
    tittle: 'Existing Powerful Network',
    text: 'The most common graphics cards being used for mining were built for gaming. Making them fit for purpose without significant changes.',
    icon: Playerlogo4
  }

])
</script>


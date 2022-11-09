<template>
  <div class="mt-32 mb-11  sm:min-h-[1200px]">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen">
      <div class="lg:w-[940px]  flex flex-col justify-between ">
        <div
          id="title"
          class="mb-[40px] sm:mb-[110px]"
        >
          <h3
            class="text-[8vw] lg:text-[55px] font-semibold leading-[66px] text-center linear-color animate-linear-color-animat font-Inter-700 reval-in-Inv"
          >
            Investors and
            Partners</h3>
        </div>
        <div
          id="sponsor"
          class=" lg:w-[940px]   flex flex-col  md:justify-between items-center "
        >
          <!-- webInvestors -->
          <div
            id="Investors"
            class="hidden w-[600px] lg:w-full mb-14 md:flex lg:justify-between justify-between flex-wrap reval-bottommove-Inv0  "
          >
            <div
              class=" w-[142px] md:w-[205px]  h-[49px] md:h-[223px] flex lg:flex-col justify-center lg:justify-between items-center mx-3 mb-5 "
              v-for="i in homeInfo.investors"
            >
              <!-- icon -->
              <div
                class="min-w-[100px] h-[100px] lg:w-[121px] lg:h-[121px]  bg-Union-md custom-image-self lg:bg-Union relative "
              >
                <img
                  :src="i.logo_image
                  "
                  class="absolute -right-[3px] bottom-[3px] w-[67px] h-[67px]"
                >
              </div>
              <!-- text-img -->
              <div
                class="flex justify-center items-center w-[119px] ml-4 h-[37px] lg:w-full lg:min-h-[83px] mt-[20px] ">
                <img
                  :src="i.title_image"
                  class="w-[119px] h-auto max-h-[60]  lg:w-[145px] "
                >
              </div>
            </div>
          </div>

          <!-- 移动端Investors -->
          <div
            id="Investors"
            class=" w-[500px]  md:hidden  flex justify-center flex-wrap  px-17 reval-bottommove-Inv0"
          >
            <div
              class="max-w-[200px] w-[200px] max-h-[100px]  h-[100px]  mb-5 flex items-baseline justify-around relative "
              v-for="i in homeInfo.investors "
            >
              <!-- icon -->
              <div class="w-[70px] h-[70px] lg:w-[121px] lg:h-[121px]  bg-Union custom-image-self relative ">
                <img
                  :src="i.logo_image"
                  class="w-[35px] h-[35px] absolute bottom-0 right-0"
                >
              </div>
              <!-- text -->
              <div id="text-img">
                <img
                  :src="i.title_image"
                  class="w-[80px] h-auto max-h-[60]   "
                >
              </div>
            </div>
          </div>

          <!-- 中线 -->
          <!-- <img
            id="line"
            class="sm:w-full w-[362px] mb-14 reval-bottommove-Inv1"
            src="../../assets/sponsor-line.png"
          > -->
          <div class="streamer sm:w-full w-[362px] mt-4 mb-10 reval-bottommove-Inv1"></div>


          <!-- 下方Partners -->
          <div
            id="Partners"
            class=" flex md:justify-between justify-start flex-wrap md:pl-0 pl-[50px]  md:max-w-full max-w-[500px] reval-bottommove-Inv2"
          >
            <div
              class="md:w-[289px] w-[110px]  md:h-[204.66666667px] md:max-h-full max-h-[100px] flex justify-center items-center md:mx-0 m-3"
              v-for="i in homeInfo.partners"
            >
              <img
                :src="i.logo_image
                "
                class="max-w-full max-h-full "
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
defineProps(['homeInfo'])
const scrollRev = scrollReveal()
onMounted(() => {
  scrollRev.reveal('.reval-in-Inv', {
    origin: 'bottom',
    duration: 1700,
    delay: 700,
  })
  scrollRev.reveal('.reval-bottommove-Inv0', {
    origin: 'bottom',
    duration: 1700,
    delay: 800,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-Inv1', {
    origin: 'bottom',
    duration: 1700,
    delay: 1000,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-Inv2', {
    origin: 'bottom',
    duration: 1700,
    delay: 1200,
    distance: '130px',
  })

})

</script>

<template>
  <div class="mt-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen">
      <div class="lg:w-[940px]  flex flex-col justify-between">
        <div id="title" class="mb-[40px] sm:mb-[110px]">
          <h3
            class="text-[36px] lg:text-[55px] font-semibold leading-[66px] text-center linear-color animate-linear-color-animat">
            Investors and
            Partners</h3>
        </div>
        <div id="sponsor" class=" lg:w-[940px] lg:h-[1133px]  flex flex-col  md:justify-between items-center">
          <!-- 上方Investors -->
          <div id="Investors"
            class="hidden  w-[600px] lg:w-full mb-14 md:flex justify-between flex-wrap lg:flex-nowrap">
            <div
              class=" w-[142px] md:w-[245px] h-[49px] md:h-full flex  lg:flex-col justify-center lg:justify-between items-center mx-3 mb-5 border"
              v-for="i in homeInfo.investors">
              <!-- icon -->
              <div
                class="w-[100px] h-[100px] lg:w-[121px] lg:h-[121px]  bg-Union-md custom-image-self lg:bg-Union relative ">
                <img :src="i.logo_image
                " class="absolute -right-[3px] bottom-[3px] w-[67px] h-[67px]">
              </div>
              <!-- text-img -->
              <div
                class="flex justify-center items-center w-[119px] ml-4 h-[37px] lg:w-full lg:min-h-[83px] mt-[20px] ">
                <img :src="i.title_image" class="w-[119px] h-auto max-h-[60]  lg:w-[145px] ">
              </div>
            </div>
          </div>

          <!-- 移动端Investors -->
          <div id="Investors" class=" w-[500px]  md:hidden  flex justify-around flex-wrap  border ">
            <div
              class="max-w-[200px] w-[200px] max-h-[100px]  h-[100px]  mb-5 flex items-baseline justify-center relative bg-red-300"
              v-for="i in homeInfo.investors ">
              <!-- icon -->
              <div class="w-[100px] h-[100px] lg:w-[121px] lg:h-[121px]  bg-Union custom-image-self ">
                <img :src="i.logo_image" class="w-[35px] h-[35px]">
              </div>
              <!-- text -->
              <div id="text-img">
              </div>
            </div>
          </div>

          <!-- 中线 -->
          <img id="line" class="w-full mb-14" src="../../assets/sponsor-line.png">

          <!-- 下方Partners -->
          <div id="Partners" class="w-[871px]  flex justify-between flex-wrap mb-28">
            <div class="w-[289px] h-[204.66666667px] flex justify-center items-center" v-for="i in homeInfo.partners">
              <img :src="i.logo_image
              " class="max-w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['homeInfo'])


</script>

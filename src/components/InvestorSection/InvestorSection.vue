<template>
  <div class="mb-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen">
      <div class="w-[940px]  flex flex-col justify-between">
        <div id="title" class="mb-[110px]">
          <h3 class="text-[55px] font-semibold leading-[66px] text-center linear-color animate-linear-color-animat">
            Investors and
            Partners</h3>
        </div>
        <div id="sponsor" class="w-[940] h-[1133px]  flex flex-col justify-between items-center">
          <!-- 上方Investors -->
          <div id="Investors" class="w-full h-[230px] mb-14 flex justify-between">
            <div class="w-[145px] h-full flex flex-col justify-between items-center" v-for="i in homeInfo.investors">
              <!-- icon -->
              <div class="w-[121px] h-[121px] bg-Union relative ">
                <img :src="i.logo_image
                " class="absolute -right-[3px] bottom-[3px]">
              </div>
              <!-- text-img -->
              <div class="flex justify-center items-center w-full min-h-[83px]">
                <img :src="i.title_image" class="w-[145px] ">
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

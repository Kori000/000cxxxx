<!--
 * @Author: Kori
 * @Date: 2022-10-29 22:00:00
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 15:55:48
 * @FilePath: /portalverse_offcial/src/components/PostsSecton/PostsSecton.vue
 * @Description: 
 * 
-->
<template>
  <div class="mb-80">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen  ">
      <div class="w-[1148px] h-screen flex flex-col justify-between">
        <div id="title" class="flex flex-col justify-between items-center">
          <div class="mb-5">
            <h5 class="text-[22px] leading-[26px] text-white">Blog</h5>
          </div>
          <h3 class="text-[55px] font-semibold leading-[66px] text-center linear-color animate-linear-color-animat">Stay
            updated on Portalverse</h3>
        </div>
        <div id="main" class="w-[1148px] h-[700px] flex flex-col justify-between items-center  ">
          <div id="blog-main-content" class="w-full h-[496px]  flex justify-between items-start ">
            <div class="w-[554px]  flex flex-col justify-between z-10" v-for="i in homeInfo.blogs">
              <div class="w-[554px] h-[298px] relative ">
                <img :src="i.cover_image
                " class="">
                <img src="../../assets/blog-line.png" class="absolute -bottom-[2px] left-0">
              </div>
              <p class="text-4xl font-medium leading-10 text-white break-words max-w-[510px] mt-9 ml-[19px]">{{ i.title
              
              }}</p>
            </div>
          </div>
          <div id="link-btn"
            class="w-[281px] h-[64px] bg-Blog-btn-border relative leading-5 hover:btn-gradient hover:cursor-pointer hover:btn-gradient hover:rounded-[20px]">
            <svg width="281" height="65" viewBox="0 0 281 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1" width="280" height="63" rx="19.5" fill="url(#paint0_linear_2707_3007)"
                fill-opacity="0.1" stroke="url(#paint1_linear_2707_3007)" />
              <defs>
                <linearGradient id="paint0_linear_2707_3007" x1="12.6009" y1="5.00704" x2="179.166" y2="162.428"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#BF4CD9" />
                  <stop offset="1" stop-color="#726AFF" />
                </linearGradient>
                <linearGradient id="paint1_linear_2707_3007" x1="8.78094" y1="24.5002" x2="95.3282" y2="155.535"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#75DAF3" />
                  <stop offset="0.528646" stop-color="#4553F2" />
                  <stop offset="0.970271" stop-color="#7623F5" />
                </linearGradient>
              </defs>
            </svg>
            <h3 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold ">
              Browse
              Articles
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>



<script setup>
defineProps(['homeInfo'])

</script>


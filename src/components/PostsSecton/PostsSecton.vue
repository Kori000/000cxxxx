<template>
  <div class="lg:mb-36 mb-0  sm:pt-0 sm:min-h-[800px]">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col  ">
      <div class="xl:w-[1148px] flex flex-col justify-between">
        <div
          id="title"
          class="flex flex-col justify-between items-center sm:pt-[130px]"
        >
          <div class="mb-5 ">
            <h5 class="sm:text-[22px] text-base leading-[26px] text-white font-Inter reval-in-Blog">Blog</h5>
          </div>
          <h3
            class=" sm:text-[55px] text-4xl  font-semibold sm:leading-[66px] leading-[43px] sm:max-w-full max-w-[231px] text-center linear-color animate-linear-color-animat font-Inter-700 reval-bottommove-Blog0  mb-[5.3rem]"
          >
            Stay
            updated on Portalverse</h3>
        </div>
        <div
          id="main"
          class="lg:w-[1148px] flex flex-col justify-between items-center  "
        >
          <div
            id="blog-main-content"
            class="w-full flex lg:justify-between justify-center items-start flex-wrap relative lg:mb-20 "
          >
            <div
              class=" w-[554px]  flex flex-col justify-between items-center z-10 lg:mb-0 sm:mb-20 relative sm:mt-[60px] "
              :class="'reval-bottommove-Blog' + (index + 1)"
              v-for="i, index in homeInfo.blogs"
            >
              <div class="sm:w-[554px] w-[346px] sm:h-[298px] h-[186px] relative rounded-2xl overflow-hidden ">
                <a
                  :href="i.url"
                  target="_blank"
                >
                  <img
                    :src="i.cover_image
                    "
                    class="sm:hover:scale-125  transition-all
                  
          duration-500"
                  >
                </a>
                <img
                  src="../../assets/blog-line.png"
                  class="absolute -bottom-[2px] left-0 "
                >
              </div>
              <p
                class=" lg:text-4xl sm:text-2xl text-xl font-medium sm:leading-10 leading-7 text-white lg:text-start sm:text-center text-start break-words max-w-[510px] sm:w-full w-[341px] lg:h-full  sm:h-[186px] font-Inter mt-9 ml-[19px]  ">
                {{ i.title

                }}</p>
              <!-- lg分辨率以下出现分割线 -->
              <CutLineMd
                v-show="index !== homeInfo.blogs.length - 1"
                class="block sm:hidden mt-20"
              ></CutLineMd>
            </div>


          </div>
          <div
            id=" link-btn"
            class="w-[281px] h-[64px] bg-Blog-btn-border relative leading-5 sm:hover:btn-gradient sm:hover:cursor-pointer sm:hover:btn-gradient sm:hover:rounded-[20px] sm:mt-0 mt-12 reval-bottommove-Blog2"
          >
            <svg
              width="281"
              height="65"
              viewBox="0 0 281 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="280"
                height="63"
                rx="19.5"
                fill="url(#paint0_linear_2707_3007)"
                fill-opacity="0.1"
                stroke="url(#paint1_linear_2707_3007)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2707_3007"
                  x1="12.6009"
                  y1="5.00704"
                  x2="179.166"
                  y2="162.428"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BF4CD9" />
                  <stop
                    offset="1"
                    stop-color="#726AFF"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2707_3007"
                  x1="8.78094"
                  y1="24.5002"
                  x2="95.3282"
                  y2="155.535"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#75DAF3" />
                  <stop
                    offset="0.528646"
                    stop-color="#4553F2"
                  />
                  <stop
                    offset="0.970271"
                    stop-color="#7623F5"
                  />
                </linearGradient>
              </defs>
            </svg>
            <a
              href="https://medium.com/@PORTALVERSE_NETWORK"
              target="_blank"
              class="w-full h-full leading-[64px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold font-Inter sm:hover:text-xl transition-all sm:hover:leading-[64px]  select-none"
            >Browse
              Articles
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>



<script setup>
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
import CutLineMd from "@/components/CutLineMd.vue";

defineProps(['homeInfo'])
const scrollRev = scrollReveal()

onMounted(() => {
  scrollRev.reveal('.reval-in-Blog', {
    origin: 'bottom',
    duration: 1600,
    delay: 500,
    distance: '80px',
  })
  scrollRev.reveal('.reval-bottommove-Blog0', {
    origin: 'bottom',
    duration: 1200,
    delay: 800,
    distance: '60px',
  })
  scrollRev.reveal('.reval-bottommove-Blog1', {
    origin: 'right',
    duration: 1900,
    delay: 1000,
    distance: '60px',
  })

  scrollRev.reveal('.reval-bottommove-Blog2', {
    origin: 'right',
    duration: 1700,
    delay: 1350,
    distance: '60px',
  })

})





</script>

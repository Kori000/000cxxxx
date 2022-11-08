<template>
  <div class="pt-32 sm:mt-20">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col h-full ">
      <div class="w-[1149px] flex flex-col justify-between items-center">
        <div
          id="Title"
          class="reval-bottommove-Game0"
        >
          <h3
            class=" sm:text-[55px]  text-[35px] font-semibold leading-[66px] linear-color animate-linear-color-animat font-Inter-700   sm:mb-24 mb-12"
          >
            Incubated Games
          </h3>
        </div>
        <!-- web页游戏列表 -->
        <div
          id="Game-List"
          class="hidden w-full lg:flex flex-col justify-between items-center reval-bottommove-Game1-0 "
        >
          <div
            id="Game-cart"
            class=" w-full h-[443px] relative flex justify-center items-center  mb-20
          transition-all duration-200
          sm:hover:-mt-[10px] sm:hover:mb-[90px]
          "
            v-for="i, index in homeInfo.games"
            :key="index"
          >
            <!-- 透明遮罩 -->
            <div
              class="z-30  w-full h-full absolute top-0 left-0"
              @mouseleave="mouseLeave(index)"
              @mouseover="mouseOver(index)"
            ></div>
            <!-- 白框 -->
            <img
              src="../../assets/game-cart.png"
              class=" w-full h-full absolute top-0 left-0 "
              ref="whiteLine"
            >
            <!-- 彩框 -->
            <img
              src="../../assets/game-cart-hover.png"
              v-show="i.show ? true : false"
              class=" w-full h-full absolute top-0 left-0 "
            >
            <div
              id="Game-box"
              class="w-[1078px] h-[368px]  flex justify-between flex-wrap relative"
            >
              <!-- 游戏图片 -->
              <img
                id="Game-img"
                :src="i.cover_image"
                class="w-[544px] h-[368px]0"
              >
              <!-- 游戏信息 -->
              <div
                id="Game-info"
                class="w-[454px] h-[258px]  flex flex-col justify-around pt-5"
              >
                <h6 class="font-semibold text-[26px] text-white leading-[31px] font-Inter">{{ i.name }}</h6>
                <div class="w-[180px] h-[40px]  relative flex justify-center items-center">
                  <img
                    src="../../assets/game-border.png"
                    class="absolute top-0 left-0"
                  >
                  <p class="text-[#C0C0C0] text-center w-[150px] h-[25px] text-[14px] leading-6  font-Inter">{{ i.tag }}
                  </p>
                </div>
                <h5 class="font-medium text-[22px] leading-7 text-[#DCDCDCCC] pr-4 font-Inter">{{ i.introduction }}</h5>
              </div>
              <!-- 箭头标志 -->
              <img
                src="../../assets/game-sign.png"
                class="w-[74px] h-[64px] absolute bottom-4 right-10"
              >
            </div>
          </div>
        </div>

        <!-- lg以下游戏列表 -->
        <div
          id="Game-List"
          class="lg:hidden w-[340px]  flex flex-col justify-between items-center reval-bottommove-Game1-0"
        >
          <div
            id="Game-cart"
            class=" w-full h-[480px] relative flex flex-col justify-start items-center mb-14"
            v-for="i, index in homeInfo.games"
            :key="index"
          >
            <!-- web端边框 -->
            <img
              src="../../assets/game-cart.png"
              class="hidden sm:block w-full h-full absolute top-0 left-0 "
              ref="whiteLine"
            >
            <!-- 移动端边框 -->
            <img
              src="../../assets/game-cart-md.png"
              class="block sm:hidden w-full h-full absolute top-0 left-0 "
              ref="whiteLine"
            >
            <div
              id="Game-box"
              class="w-[310px] h-full flex flex-col justify-start  relative"
            >
              <!-- 游戏图片 -->
              <img
                id="Game-img"
                :src="i.cover_image"
                class="w-[310px] h-[210px] mt-4"
              >
              <!-- 游戏信息 -->
              <div
                id="Game-info"
                class="w-[290px] h-[258px]  flex flex-col justify-start pt-5 mx-auto"
              >
                <h5 class="font-medium text-[22px] text-white leading-[26.4px] mb-5">{{ i.name }}</h5>
                <div class="w-[160px] h-[31px]  relative flex justify-center items-center  mb-5">
                  <img
                    src="../../assets/game-border-md.png"
                    class="absolute top-0 left-0"
                  >
                  <p class="text-[#C0C0C0] text-center w-[136px] h-[16px] text-[13px] leading-4">{{ i.tag }}</p>
                </div>
                <h5 class="font-medium text-[14px] leading-6 text-[#DCDCDCCC] pr-4">{{ i.introduction }}</h5>
              </div>
              <!-- 箭头标志 -->
              <img
                src="../../assets/game-sign-md.png"
                class="w-[40px] h-[34px] absolute bottom-6 right-6"
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
const porps = defineProps(['homeInfo'])
const scrollRev = scrollReveal()
onMounted(() => {
  scrollRev.reveal('.reval-bottommove-Game0', {
    origin: 'bottom',
    duration: 1700,
    delay: 700,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-Game1-0', {
    origin: 'bottom',
    duration: 1700,
    delay: 1200,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-Game1-1', {
    origin: 'bottom',
    duration: 1700,
    delay: 1200,
    distance: '130px',
  })

})

// 动态绑定 hover 逻辑
function mouseOver (index) {
  porps.homeInfo.games[index].show = true
}
function mouseLeave (index) {
  porps.homeInfo.games[index].show = null
}

</script>


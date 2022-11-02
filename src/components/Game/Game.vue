<!--
 * @Author: Kori
 * @Date: 2022-10-29 22:00:14
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 16:12:01
 * @FilePath: /portalverse_offcial/src/components/Game/Game.vue
 * @Description: 
 * 
-->
<template>
  <div class="pt-32 mb-32">
    <!-- 要删除高度 因为是动态添加 -->
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col h-full ">
      <div class="w-[1149px] h-[1118px] flex flex-col justify-between items-center">
        <div id="Title">
          <h3 class="text-[55px] font-semibold leading-[66px] linear-color animate-linear-color-animat">Incubated Games
          </h3>
        </div>
        <!-- 游戏列表 -->
        <!-- 要删除高度 -->
        <div id="Game-List" class="w-full h-[952px] flex flex-col justify-between items-center">
          <div id="Game-cart" class=" w-full h-[443px] relative flex justify-center items-center"
            v-for="i, index in homeInfo.games" :key="index">
            <img src="../../assets/game-cart-hover.png" class=" w-full h-full absolute top-0 left-0 ">
            <div class="z-30  w-full h-full absolute top-0 left-0" @mouseleave="mouseLeave(index)"
              @mouseover="mouseOver(index)"></div>
            <img src="../../assets/game-cart.png" class=" w-full h-full absolute top-0 left-0 " ref="whiteLine">
            <!-- 后续删尺寸 -->
            <div id="Game-box" class="w-[1078px] h-[368px]  flex justify-between flex-wrap relative">
              <!-- 游戏图片 -->
              <img id="Game-img" :src="i.cover_image" class="w-[544px] h-[368px]0">
              <!-- 游戏信息 -->
              <div id="Game-info" class="w-[454px] h-[258px]  flex flex-col justify-around pt-5">
                <h6 class="font-semibold text-[26px] text-white leading-[31px]">{{ i.name }}</h6>
                <div class="w-[180px] h-[40px]  relative flex justify-center items-center">
                  <img src="../../assets/game-border.png" class="absolute top-0 left-0">
                  <p class="text-[#C0C0C0] text-center w-[150px] h-[25px] text-[14px] leading-6 ">{{ i.tag }}</p>
                </div>
                <h5 class="font-medium text-[22px] leading-7 text-[#DCDCDCCC] pr-4">{{ i.introduction }}</h5>
              </div>
              <!-- 箭头标志 -->
              <img src="../../assets/game-sign.png" class="w-[74px] h-[64px] absolute bottom-4 right-10">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['homeInfo'])

function mouseOver (index) {
  // gameList[index].borderShow = false
}
function mouseLeave (index) {
  // gameList[index].borderShow = true
}
</script>


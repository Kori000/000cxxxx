<!--
 * @Author: Kori
 * @Date: 2022-10-29 21:58:18
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-31 15:43:23
 * @FilePath: /portalverse_offcial/src/components/TimelineSection/TimelineSection.vue
 * @Description: 
 * 
-->
<template>
  <div class="mb-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen ">
      <div id="container-box" class="delete:h h-[1024px] w-[1182px] flex flex-col justify-around pb-[120px]">
        <!-- 上方标题 -->
        <div id="title" class="h-[159px]  flex flex-col justify-around items-center mb-12">
          <h5 class="text-xl leading-5 font-medium text-white text-center ">Milestones</h5>
          <h3 class="text-6xl font-semibold leading-[3.75rem] linear-color animate-linear-color-animat">Roadmap to
            Market</h3>
        </div>
        <!-- itemline 区域 -->
        <div id="timeline_box" class="relative  min-w-[1182px] min-h-[765px]">
          <!-- 中心线 -->
          <img id="midline" src="../../assets/MidLine-Milstones.png"
            class=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <!-- 左1 -->
          <!-- 四个都是 框div + 线img 组合 -->
          <div id="left-timeline-1" class="absolute top-11 -left-4 w-[619px] h-[224px]">
            <div
              class="w-[446px] h-[213px] mb-5 absolute right-[123px] bg-Rectangle  hover:bg-Rectangle-hover hover:h-[213px] text-white text-center leading-[213px]">
              <div class="">
                <div class="w-[72px] h-[68px]  bg-[#DC36F8] filter blur-[59px]"></div>

                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] right-[62px] flex flex-col justify-between items-end">
                  <div class="w-[89px] h-[35px] btn-gradient rounded-md flex justify-center items-center">
                    <p class="text-[13px] font-semibold">Q1 2022</p>
                  </div>
                  <h5 class=" leading-6 text-end text-xl font-medium">
                    Complete P2P Streaming For Beta Testing
                  </h5>
                </div>
              </div>
            </div>
            <img src="../../assets/Line-Milstones-right.png" class="absolute right-0 top-1/2 translate-y-[-50%]">
          </div>
          <!-- 左2 -->
          <div id="left-timeline-2" class="absolute w-[619px] h-[224px] top-[309px] -left-[1rem]">
            <div
              class="w-[446px] h-[213px] mb-5 absolute right-[123px] bg-Rectangle hover:bg-Rectangle-hover hover:h-[213px] text-white text-center leading-[213px]">
              <div>
                <div class="w-[58px] h-[55px] absolute -bottom-[27px] right-2 bg-[#6EA0FF] filter blur-[59px]"></div>
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] right-[62px] flex flex-col justify-between items-end">
                  <div class="w-[89px] h-[35px] btn-gradient rounded-md flex justify-center items-center">
                    <p class="text-[13px] font-semibold">Q1 2022</p>
                  </div>
                  <h5 class=" leading-6 text-end text-xl font-medium">
                    Complete P2P Streaming For Beta Testing
                  </h5>
                </div>

              </div>
            </div>
            <img src="../../assets/Line-Milstones-right.png" class="absolute right-0 top-1/2 translate-y-[-50%]">
          </div>
          <!-- 右1 -->
          <div id="right-timeline-1" class="absolute w-[619px] h-[224px] top-44 -right-[1rem]">
            <img src="../../assets/Line-Milstones-left.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[446px] h-[213px] mb-5 absolute left-[123px] bg-Rectangle hover:bg-Rectangle-hover hover:h-[213px] text-white text-center leading-[213px]">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 背景透明+模糊 -->

                <!-- 彩色Q + 文字 -->
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] left-[62px] flex flex-col justify-between items-start">
                  <div class="w-[89px] h-[35px] btn-gradient rounded-md flex justify-center items-center">
                    <p class="text-[13px] font-semibold">Q1 2022</p>
                  </div>
                  <!-- 内容 -->
                  <h5 class=" leading-6 text-start text-xl font-medium">
                    Complete P2P Streaming For Beta Testing
                  </h5>
                </div>
              </div>
            </div>

          </div>
          <!-- 右2 -->
          <div id="right-timeline-2" class="absolute w-[619px] h-[224px] top-[442px] -right-[1rem]">
            <img src="../../assets/Line-Milstones-left.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[446px] h-[213px] mb-5 absolute left-[123px] bg-Rectangle hover:bg-Rectangle-hover hover:h-[213px] text-white text-center leading-[213px]">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#31998B] filter blur-[50px]"></div>
                <!-- 背景透明+模糊 -->
                <!-- <div class="w-[446px] h-[213px] absolute top-0 left-0 timeline-blur opacity-10 blur-[2px]"></div> -->
                <!-- 彩色Q + 文字 -->
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] left-[62px] flex flex-col justify-between items-start">
                  <div class="w-[89px] h-[35px] btn-gradient rounded-md flex justify-center items-center">
                    <p class="text-[13px] font-semibold">Q1 2022</p>
                  </div>
                  <!-- 内容 -->
                  <h5 class=" leading-6 text-start text-xl font-medium">
                    Complete P2P Streaming For Beta Testing
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="mb-32 sm:pt-32">
    <div class=" lg:mx-36 mx-12 flex justify-center items-center flex-col min-h-screen ">
      <div id="container-box"
        class=" h-[1024px] sm:w-[1182px] w-[340px] flex flex-col justify-center sm:justify-around items-center pb-[120px]">
        <!-- 上方标题 -->
        <div id="title" class="h-[159px]  flex flex-col justify-around items-center mb-0 sm:mb-12">
          <h5 class="text-xl leading-5 font-medium text-white text-center  font-Inter reval-bottommove">Milestones</h5>
          <h3
            class="sm:text-6xl text-[2.1rem] font-semibold leading-10 mt-6 sm:leading-[3.75rem]  linear-color animate-linear-color-animat font-Inter-700 reval-bottommove1">
            Roadmap to
            Market</h3>
        </div>
        <!-- web itemline 区域 -->
        <div id="timeline_box" class="hidden sm:block relative  min-w-[1182px] min-h-[765px]  items-center font-Inter">
          <!-- 中心线 -->
          <div class="h-[100px] reval-in-time">
            <img id="midline" src="../../assets/MidLine-Milstones.png"
              class=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  h-[800px] ">
          </div>
          <!-- 左1 -->
          <!-- 四个都是 框div + 线img 组合 -->
          <div id="left-timeline-1" class="absolute top-11 -left-4 w-[619px] h-[224px] reval-bottommove-time0">
            <div
              class="w-[32vw] h-[213px] mb-5 absolute right-[123px] bg-Rectangle  sm:hover:bg-Rectangle-hover  custom-image-self text-white text-center leading-[213px] ">
              <div class="">
                <div class="w-[72px] h-[68px]  bg-[#DC36F8] filter blur-[59px]"></div>

                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] md:right-[62px] right-[32px] flex flex-col justify-between items-end ">
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
          <div id="left-timeline-2"
            class="absolute w-[619px] h-[224px] top-[309px] -left-[1rem] reval-bottommove-time2">
            <div
              class="w-[32vw] h-[213px] mb-5 absolute right-[123px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[213px] ">
              <div>
                <div class="w-[58px] h-[55px] absolute -bottom-[27px] right-2 bg-[#6EA0FF] filter blur-[59px]"></div>
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] md:right-[62px] right-[32px] flex flex-col justify-between items-end">
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
          <div id="right-timeline-1"
            class="absolute w-[619px] h-[224px] top-44 -right-[1rem] reval-bottommove2 reval-bottommove-time1">
            <img src="../../assets/Line-Milstones-left.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[32vw] h-[213px] mb-5 absolute left-[123px] bg-Rectangle hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[213px]">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 背景透明+模糊 -->

                <!-- 彩色Q + 文字 -->
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] md:left-[62px] left-[32px] flex flex-col justify-between items-start">
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
          <div id="right-timeline-2"
            class="absolute w-[619px] h-[224px] top-[442px] -right-[1rem] reval-bottommove reval-bottommove-time3">
            <img src="../../assets/Line-Milstones-left.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[32vw] h-[213px] mb-5 absolute left-[123px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[213px]">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#31998B] filter blur-[50px]"></div>
                <!-- 背景透明+模糊 -->
                <!-- <div class="w-[446px] h-[213px] absolute top-0 left-0 timeline-blur opacity-10 blur-[2px]"></div> -->
                <!-- 彩色Q + 文字 -->
                <div
                  class="w-[218px] h-[144px] absolute  top-[35px] md:left-[62px] left-[32px] flex flex-col justify-between items-start">
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
        <!-- 移动端itemline 区域 -->
        <div id="timeline_box"
          class="flex justify-center items-center relative sm:hidden w-screen min-w-[340px] min-h-[765px]  ">
          <!-- 中心线 -->
          <div class="absolute top-0 left-12 pt-4 reval-in-time h-[590px] ">
            <img id="midline" src="../../assets/MidLine-Milstones.png" class=" h-[890px] ">
          </div>
          <!-- 1 -->
          <div id="left-md-1"
            class="absolute w-[619px] h-[224px] top-[64px] left-[2.35rem] flex items-center reval-bottommove-time0">
            <img src="../../assets/Line-Milstones-left-md.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[70vw] h-[160px] mb-5 absolute left-[57px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[160px]  flex justify-start items-center ">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 彩色Q + 文字 -->
                <div class="w-[218px] h-[144px]  flex flex-col justify-between items-start  ml-6 py-2">
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
          <!-- 2 -->
          <div id="left-md-2"
            class="absolute w-[619px] h-[224px] top-[262] left-[2.35rem] flex items-center reval-bottommove-time1 mb-5">
            <img src="../../assets/Line-Milstones-left-md.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[70vw] h-[160px] mb-5 absolute left-[57px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[160px]  flex justify-start items-center ">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 彩色Q + 文字 -->
                <div class="w-[218px] h-[144px]  flex flex-col justify-between items-start  ml-6 py-2">
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
          <!-- 3 -->
          <div id="left-md-3"
            class="absolute w-[619px] h-[224px] top-[460px] left-[2.35rem] flex items-center reval-bottommove-time2 ">
            <img src="../../assets/Line-Milstones-left-md.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[70vw] h-[160px] mb-5 absolute left-[57px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[160px]  flex justify-start items-center ">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 彩色Q + 文字 -->
                <div class="w-[218px] h-[144px]  flex flex-col justify-between items-start  ml-6 py-2">
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
          <!-- 4 -->
          <div id="left-md-4"
            class="absolute w-[619px] h-[224px] top-[658px] left-[2.35rem] flex items-center reval-bottommove-time3">
            <img src="../../assets/Line-Milstones-left-md.png" class="absolute left-0 top-1/2 translate-y-[-50%]">
            <div
              class="w-[70vw] h-[160px] mb-5 absolute left-[57px] bg-Rectangle sm:hover:bg-Rectangle-hover custom-image-self text-white text-center leading-[160px]  flex justify-start items-center ">
              <div>
                <!-- 光晕 -->
                <div class="w-[72px] h-[68px] absolute top-[75px] -right-[27px] bg-[#7565FF] filter blur-[59px]"></div>
                <!-- 彩色Q + 文字 -->
                <div class="w-[218px] h-[144px]  flex flex-col justify-between items-start  ml-6 py-2">
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
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
const scrollRev = scrollReveal()
onMounted(() => {
  scrollRev.reveal('.reval-in-time', {
    origin: 'bottom',
    duration: 1700,
    delay: 600,
  })
  scrollRev.reveal('.reval-bottommove-time0', {
    origin: 'bottom',
    duration: 1700,
    delay: 900,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-time1', {
    origin: 'bottom',
    duration: 1700,
    delay: 1200,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-time2', {
    origin: 'bottom',
    duration: 1700,
    delay: 1500,
    distance: '130px',
  })
  scrollRev.reveal('.reval-bottommove-time3', {
    origin: 'bottom',
    duration: 1700,
    delay: 1800,
    distance: '130px',
  })
})
</script>

<style lang="scss" scoped>

</style>

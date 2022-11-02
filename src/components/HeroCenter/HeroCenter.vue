<template>
  <div class="mb-32 ">
    <div class=" lg:mx-36 ld:mx-12 mx-0 flex justify-center xl:items-start items-center flex-col  min-h-screen ">
      <!-- 主体内容 -->
      <div id="hero_main "
        class="reval-in md:w-full  text-white  z-10 lg:pt-52  md:max-w-2xl  max-w-md lg:mr-12 lg:block flex flex-col justify-center items-center ">
        <h5 class=" text-xl font-medium leading-6 lg:text-left text-center lg:mb-2 mb-6">Portalverse Network</h5>
        <!-- 大标题+动画 -->
        <h1
          class="lg:text-8xl  md:text-7xl text-[54px]  lg:font-bold  font-semibold lg:leading-[130px] md:leading-[80px]  leading-[64px] tracking-wide lg:text-left text-center linear-color animate-linear-color-animat lg:w-auto md:w-[500px] w-[363px] ">
          Decentralized Real-Time Cloud Gaming</h1>
        <!-- 描述小于1024显示 -->
        <div id=" hero_describe-1024 "
          class="reval-rightmove  mt-6 min-h-[94px]  max-w-xs flex py-2 items-center lg:hidden">
          <h6 class="text-white text-lg font-medium leading-6 text-center">Harnessing Distributed and Underutilised
            Computing
            Powers
            to form a Computing
            Infrastructure
            Layer
            for the
            Metaverse
          </h6>
        </div>
        <div id="btn_com" class=" flex mt-12 font-bold text-lg md:flex-row flex-col md:items-start items-center">
          <button class="w-72 h-16 rounded-[20px] mr-2
          mb-14 md:mb-0
          btn-gradient
           ">Join Discord</button>
          <button class="flex justify-evenly items-center w-60 h-14">
            <p>Read Whitepaper</p>
            <div class="">
              <img src="@/assets/svg/RightArrow.svg">
            </div>
          </button>
        </div>
      </div>
      <!-- 大于1024显示 -->
      <div id=" hero_describe "
        class="reval-rightmove z-10 mt-2 min-h-[94px] self-end max-w-lg lg:flex py-2 items-center hidden">
        <span class="border-white border-r-2 h-20 lg:inline-block hidden"></span>
        <h6 class="text-white text-2xl font-semibold leading-8 pl-12 ">Harnessing Distributed and Underutilised
          Computing
          Powers
          to form a Computing
          Infrastructure
          Layer
          for the
          Metaverse
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import scrollReveal from 'scrollreveal';
const scrollRev = scrollReveal()
onMounted(() => {
  scrollRev.reveal({
    // 动画的时长
    // duration: 1500,
    // 延迟时间
    // delay: 800,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    // origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 在移动端是否使用动画
    mobile: false,
    // 滚动的距离，单位可以用%，rem等
    // distance: '200px',
    // 其他可用的动画效果
    opacity: 0.001,
    easing: 'linear',
    scale: 1,
  })

  scrollRev.reveal('.reval-in', {
    origin: 'bottom',
    duration: 2500,
    delay: 300,
  })
  scrollRev.reveal('.reval-rightmove', {
    origin: 'right',
    duration: 1700,
    delay: 900,
    distance: '100px',

  })
})
</script>

<template>
  <div>
    <div
      class="w-full md:h-[237px] sm:h-[70px] h-[40px] relative flex justify-around items-center text-white font-Inter ">
      <img src="../../assets/footer-line.png" class="absolute top-0 left-1/2 -translate-x-1/2 ">
      <div id="left" class="flex flex-col justify-around sm:mt-0 mt-6">
        <div id="logo-box" class="flex justify-start items-center md:mt-7 ">
          <div class="m-2">
            <img src="../../assets/footer-img-union.png">
          </div>
          <img src="../../assets/footer-img-text.png" class="md:w-auto md:h-auto w-[119px] h-[12px]">
        </div>
        <p class="hidden md:block font-semibold leading-[19px] my-5">Portalverse Network 2022. All rights reserved.</p>
      </div>
      <div id="middle" class="hidden lg:block w-[123px] h-[28px] "></div>
      <div id="right" class=" text-end  sm:mt-0 mt-6 ">
        <div>
          <p class="font-semibold md:text-lg text-[0.6rem] md:leading-[14px] leading-[19.36px] ">
            <a href="javascript:">Privacy Policy</a>
            •
            <a href="javascript:">Terms of Service</a>

          </p>
        </div>
      </div>
    </div>

    <!-- 小于lg 显示 -->
    <div id="bottom" class="block md:hidden font-Inter">
      <p class=" font-semibold text-xs leading-[14px] my-5 text-white text-center">Portalverse Network 2022. All rights
        reserved.</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

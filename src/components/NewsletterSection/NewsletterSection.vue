<!--
 * @Author: Kori
 * @Date: 2022-10-29 22:00:55
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 03:12:41
 * @FilePath: /portalverse_offcial/src/components/NewsletterSection/NewsletterSection.vue
 * @Description: 
 * 
-->
<template>
  <div class="mb-32">
    <div class="lg:mx-36 mx-12 flex justify-center items-center min-h-[583px] ">
      <div
        class="w-[1172px] h-[383px] custom-email-gradient rounded-[20px] text-white flex flex-col justify-center items-center relative">
        <img src="../../assets/email-union.png" class="absolute top-0 left-0 opacity-40 select-none">
        <h3 class="font-semibold text-[55px] leading-[66px] mb-3 ">Get Updates</h3>
        <h5 class="font-medium text-[22px] leading-[26px] mb-3  ">Get updated when portalverse launches its
          beta
          projects
        </h5>
        <div id="Email-Signup" class="w-[698px] h-[112px]  flex justify-around items-center z-10">
          <div class="w-[358px] h-[64px]">
            <!-- align-self: stretch;可以与flex元素共高 -->
            <input type="text"
              class="w-full h-[64px] rounded-2xl bg-[#342A38] text-[#DCDCDCCC] font-medium pl-4 outline-none"
              placeholder="Enter your email">
          </div>
          <div
            class="w-[281px] h-[64px] rounded-[20px] border flex justify-center items-center hover:text-black hover:bg-white cursor-pointer active:bg-transparent  active:text-white">
            <div class="font-bold text-lg leading-[21] text-center select-none">Subscribe</div>
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

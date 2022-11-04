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
  <div class="md:mb-32 mb-0">
    <div class="lg:mx-36 mx-12 flex justify-center items-center sm:min-h-[583px] min-h-[445px] ">
      <div
        class="w-[1172px] md:h-[383px] min-w-[374px] h-[315px] custom-email-gradient rounded-[20px] text-white flex flex-col justify-center items-center relative">
        <img src="../../assets/email-union.png" class="hidden md:block absolute top-0 left-0 opacity-40 select-none">
        <h3 class="font-semibold md:text-[55px] text-[36px] leading-[66px] mb-3 font-Inter">Get Updates</h3>
        <h5
          class="font-medium md:text-[22px] text-base leading-[26px] md:mb-3 mb-4 md:max-w-1440 sm:max-w-[358px] max-w-[312px] text-center font-Inter ">
          Get
          updated when
          portalverse launches its
          beta
          projects
        </h5>
        <div id="Email-Signup"
          class=" md:h-[112px]  flex justify-around  items-center z-10 md:flex-nowrap flex-wrap mb-3 font-Inter">
          <div class="sm:w-[358px] w-[312px] h-[64px] md:mr-5">
            <!-- align-self: stretch;可以与flex元素共高 -->
            <input type="text"
              class="w-full h-[64px] rounded-2xl bg-[#342A38] text-[#DCDCDCCC] font-medium pl-4 outline-none "
              placeholder="Enter your email">
          </div>
          <div
            class="md:w-[281px] w-[312px] h-[64px] rounded-[20px] border flex justify-center items-center hover:text-black hover:bg-white cursor-pointer active:bg-transparent  active:text-white md:mt-0 mt-5 md:bg-transparent bg-white md:text-white text-black "
            @click="subscribeBtn">
            <div class="font-bold text-lg  text-center select-none">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function subscribeBtn () {
  alert('功能未开启')
} 
</script>


<!--
 * @Author: Kori
 * @Date: 2022-10-28 16:57:35
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-30 16:39:18
 * @FilePath: /portalverse_offcial/src/components/HeroCenter/Navigation/Navigation.vue
 * @Description: 
 * 
-->
<template>
  <div class="flex justify-between ring-white backdrop-blur-[10px] fixed z-20">
    <div id="Logo" class="bg-logo-container w-[397px] h-[103px] bg-no-repeat flex justify-center items-center ">
      <div class="flex justify-center items-center mr-10">
        <img class="mr-4" src="@/assets/nav-logo.png">
        <img class="" src="@/assets/nav-logo-text.png">
      </div>
    </div>
    <div id="NavigationBar" class="flex-[2]">
      <div class="flex justify-around items-center w-full h-full pt-[42px]">
        <h5><a class="nav-link" href="">Vision</a></h5>
        <h5><a class="nav-link" href="">Features</a></h5>
        <h5><a class="nav-link" href="">Milestones</a></h5>
        <h5><a class="nav-link" href="">Blog</a></h5>
        <h5><a class="nav-link" href="">Game</a></h5>
      </div>
    </div>
    <div id="Links" class="w-[290px] flex justify-end items-center pt-[42px] pr-11 pl-[20px] flex-[1]">
      <a href="https://github.com/Portalverse-Network" target="_blank" class="mr-[30px] ">
        <img src="@/assets/svg/Github.svg" alt="Github" class="w-[30px] h-[35px]">
      </a>
      <a href="https://twitter.com/Portalverse_Net" target="_blank" class="mr-[30px]">
        <img src="@/assets/svg/Twitter.svg" alt="Twitter" class="w-[30px] h-[35px]">
      </a>
      <a href="https://discord.gg/portalverse" target="_blank" class="mr-[30px]">
        <img src="@/assets/svg/Discord.svg" alt="Discord" class="w-[38px] h-[35px]">
      </a>
    </div>
  </div>
</template>
<script setup>




</script>

<style scoped>

</style>

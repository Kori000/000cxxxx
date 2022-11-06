<template>
  <div class="flex justify-between ring-white backdrop-blur-[10px] fixed z-20 ">
    <div id="Logo"
      class="bg-logo-container custom-image-self lg:w-[26vw] lg:h-[103px] bg-no-repeat flex justify-center items-center ">
      <div class="flex justify-center items-center mr-10">
        <img class="mr-4" src="@/assets/nav-logo.png">
        <img class="" src="@/assets/nav-logo-text.png">
      </div>
    </div>
    <div id="NavigationBar" class="flex-[2] hidden lg:block">
      <div class="flex justify-around items-center w-full h-full pt-[42px] ">
        <h5><a class="nav-link custom-nav-hover py-3 px-3 font-Inter" href="#Vision">Vision</a></h5>
        <h5><a class="nav-link custom-nav-hover py-3 px-3 font-Inter" href="#Features">Features</a></h5>
        <h5><a class="nav-link custom-nav-hover py-3 px-3 font-Inter" href="#Milestones">Milestones</a></h5>
        <h5><a class="nav-link custom-nav-hover py-3 px-3 font-Inter" href="#Blog">Blog</a></h5>
        <h5><a class="nav-link custom-nav-hover py-3 px-3 font-Inter" href="#Game">Game</a></h5>
      </div>
    </div>
    <!-- web -->
    <div id="Links" class=" w-[290px]  flex  justify-end items-center pt-[42px] pr-11 pl-[20px] flex-[1] ">
      <a href="https://github.com/Portalverse-Network" target="_blank" class="mr-[30px]  ">
        <i class="fa-brands fa-github text-3xl text-white custom-nav-right-hover"></i>
      </a>
      <a href="https://twitter.com/Portalverse_Net" target="_blank" class="mr-[30px] ">
        <i class="fa-brands fa-twitter text-3xl text-white custom-nav-right-hover"></i>
      </a>
      <a href="https://discord.com/invite/ppESW6FP43" target="_blank" class="mr-[30px] ">
        <i class="fa-brands fa-discord text-3xl text-white custom-nav-right-hover "></i>
      </a>
    </div>
  </div>
</template>
<script setup>




</script>

<style scoped>

</style>

<!--
 * @Author: Kori
 * @Date: 2022-10-28 18:40:42
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-30 03:43:28
 * @FilePath: /portalverse_offcial/src/view/HomeScreen/IndexPage.vue
 * @Description: 
 * 
-->
<template>
  <!-- 全局背景颜色--#0c0c0c -->
  <div class=" bg-black-0c overflow-hidden ">
    <!-- 背景组件 -->
    <div>
      <BackGround></BackGround>
    </div>
    <!-- 内容 -->
    <div class="w-full h-full flex flex-col items-center">
      <HeroCenter class=" mb-[120px] h-[982px]"></HeroCenter>
      <MissionSection class="w-screen h-[1041px]  border-2  border-pink-500
          mb-[120px]
        "></MissionSection>
      <PlayerBenefits class="w-screen h-[830.5px] border-2  border-pink-500 
          mb-[120px]
        "></PlayerBenefits>
      <TimelineSection class="w-screen h-[1224px] border-2  border-pink-500 
          mb-[120px]
        "></TimelineSection>
      <InvestorSection class="w-screen h-[1333.5px] border-2  border-pink-500 
          mb-[120px]
        "></InvestorSection>
      <PostsSecton class="w-screen h-[1132px] border-2  border-pink-500 
          mb-[120px]
        "></PostsSecton>
      <Game class="w-screen h-[1318px] border-2  border-pink-500 
          mb-[120px]
        "></Game>
      <NewsletterSection class="w-screen h-[583px] border-2  border-pink-500
          mb-[120px]
        "></NewsletterSection>
      <Footer class="w-screen h-[237.24px] border-2  border-pink-500
          mb-[120px]
        "></Footer>
    </div>

  </div>
</template>

<script setup>
// 背景
import BackGround from "@/components/BackGround/BackGround.vue";
/**
 * 根据页面结构从上到下
 */
import HeroCenter from "@/components/HeroCenter/HeroCenter.vue";
import MissionSection from "@/components/MissionSection/MissionSection.vue";
import PlayerBenefits from "@/components/PlayerBenefits/PlayerBenefits.vue";
import TimelineSection from "@/components/TimelineSection/TimelineSection.vue";
import InvestorSection from "@/components/InvestorSection/InvestorSection.vue";
import PostsSecton from "@/components/PostsSecton/PostsSecton.vue";
import Game from "@/components/Game/Game.vue";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection.vue";
import Footer from "@/components/Footer/Footer.vue";

</script>

<style  scoped>

</style>

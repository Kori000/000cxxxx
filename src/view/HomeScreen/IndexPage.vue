<!--
 * @Author: Kori
 * @Date: 2022-10-28 18:40:42
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 03:33:08
 * @FilePath: /portalverse_offcial/src/view/HomeScreen/IndexPage.vue
 * @Description: 
 * 
-->
<template>
  <!-- 全局背景颜色--#0c0c0c -->
  <div class=" bg-black overflow-hidden ">
    <!-- 背景组件 -->
    <div>
      <BackGround class="relative "></BackGround>
    </div>
    <!-- 导航栏 -->
    <Navigation class=" w-screen h-[104px] "></Navigation>

    <!-- 内容 -->
    <!-- <div class=" container mx-auto flex flex-col items-center"> -->
    <div class="container max-w-1440 mx-auto ">
      <HeroCenter class=""></HeroCenter>
      <MissionSection class=""></MissionSection>
      <PlayerBenefits class=""></PlayerBenefits>
      <TimelineSection class=""></TimelineSection>
      <InvestorSection class=""></InvestorSection>
      <PostsSecton></PostsSecton>
      <Game class=""></Game>
      <CutLine></CutLine>
      <NewsletterSection class=""></NewsletterSection>
    </div>

    <!-- 页脚 -->
    <Footer class=" w-screen "></Footer>
  </div>
</template>

<script setup>
// 背景
import BackGround from "@/components/BackGround/BackGround.vue";
/**
 * 根据页面结构从上到下
 */
import Navigation from "@/components/Navigation/Navigation.vue";
import HeroCenter from "@/components/HeroCenter/HeroCenter.vue";
import MissionSection from "@/components/MissionSection/MissionSection.vue";
import PlayerBenefits from "@/components/PlayerBenefits/PlayerBenefits.vue";
import TimelineSection from "@/components/TimelineSection/TimelineSection.vue";
import InvestorSection from "@/components/InvestorSection/InvestorSection.vue";
import PostsSecton from "@/components/PostsSecton/PostsSecton.vue";
import Game from "@/components/Game/Game.vue";
import CutLine from "@/components/CutLine.vue";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection.vue";
import Footer from "@/components/Footer/Footer.vue";

</script>

<style  scoped>

</style>

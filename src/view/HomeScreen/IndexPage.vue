<!--
 * @Author: Kori
 * @Date: 2022-10-28 18:40:42
 * @LastEditors: Kori
 * @LastEditTime: 2022-11-01 16:50:06
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
    <Navigation class="hidden sm:flex w-screen md:h-[104px] "></Navigation>
    <NavigationMd id="mdNav" class="sm:hidden w-screen h-[44px] "></NavigationMd>
    <!-- 移动 -->
    <!-- <Navigation class=" w-screen h-11  "></Navigation> -->

    <!-- 内容 -->
    <!-- <div class=" container mx-auto flex flex-col items-center"> -->
    <div class="container max-w-1440 mx-auto ">
      <HeroCenter class=""></HeroCenter>
      <MissionSection id="Vision" class="h-fit ">
        <div class="bg-Mission-border-line custom-image-self w-full h-full absolute"></div>
      </MissionSection>
      <PlayerBenefits id="Features" class=""></PlayerBenefits>
      <TimelineSection id="Milestones" class=""></TimelineSection>
      <InvestorSection :homeInfo="homeInfo"></InvestorSection>
      <PostsSecton id="Blog" :homeInfo="homeInfo"></PostsSecton>
      <Game id="Game" :homeInfo="homeInfo" class=""></Game>
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
import NavigationMd from "@/components/Navigation/NavigationMd.vue";
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

// 获取页面信息API
import { getHomeInfoAPI } from '@/api/home.js';
import { reactive, ref } from "vue";

const homeInfo = ref({})
// 发起请求
async function getHomeInfo () {
  const { data: res } = await getHomeInfoAPI()
  // mock 不用.data 对接需要修改此处
  homeInfo.value = res.data
}
getHomeInfo()
</script>


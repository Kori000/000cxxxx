<template>
  <div class=" bg-black overflow-hidden ">
    <div>
      <BackGround class="relative "></BackGround>
    </div>
    <Navigation class="hidden sm:flex w-screen md:h-[104px] "></Navigation>
    <NavigationMd
      id="mdNav"
      class="sm:hidden w-screen h-[44px] "
    ></NavigationMd>

    <div class="container max-w-1440 mx-auto ">
      <HeroCenter class=""></HeroCenter>
      <MissionSection
        id="Vision"
        class="h-fit "
      >
        <div class="hidden sm:block bg-Mission-border-line custom-image-self w-full h-full absolute reval-in"></div>
        <div class="block sm:hidden bg-Mission-border-line-md custom-image-self w-full h-full absolute reval-in"></div>
      </MissionSection>
      <PlayerBenefits
        id="Features"
        class=""
      ></PlayerBenefits>
      <TimelineSection
        id="Milestones"
        class=""
      ></TimelineSection>
      <InvestorSection :homeInfo="homeInfo"></InvestorSection>
      <PostsSecton
        id="Blog"
        :homeInfo="homeInfo"
      ></PostsSecton>
      <Game
        id="Game"
        :homeInfo="homeInfo"
        class=""
      ></Game>
      <CutLine></CutLine>
      <NewsletterSection class=""></NewsletterSection>
    </div>

    <Footer class=" w-screen "></Footer>
  </div>
</template>

<script setup>

// 背景
import BackGround from "@/components/BackGround/BackGround.vue";
/**
 * 根据页面结构从上到下
 */
// 导航栏
import Navigation from "@/components/Navigation/Navigation.vue";
// 移动端导航
import NavigationMd from "@/components/Navigation/NavigationMd.vue";
// 主页
import HeroCenter from "@/components/HeroCenter/HeroCenter.vue";
// Our Vision
import MissionSection from "@/components/MissionSection/MissionSection.vue";
// Features
import PlayerBenefits from "@/components/PlayerBenefits/PlayerBenefits.vue";
// Milestones
import TimelineSection from "@/components/TimelineSection/TimelineSection.vue";
// Investors and Partners
import InvestorSection from "@/components/InvestorSection/InvestorSection.vue";
// Blog
import PostsSecton from "@/components/PostsSecton/PostsSecton.vue";
// Games
import Game from "@/components/Game/GameIndex.vue";
// 分割线
import CutLine from "@/components/CutLine.vue";
// Get Updates
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection.vue";
// 页脚
import Footer from "@/components/Footer/Footer.vue";

// 获取页面信息API
import { getHomeInfoAPI } from '@/api/home.js';
import { ref } from "vue";

const homeInfo = ref({})
// 发起请求
async function getHomeInfo () {
  const { data: res } = await getHomeInfoAPI()
  homeInfo.value = res.data
  console.log(res.data)
}
getHomeInfo()
</script>


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
  <div class="md:mb-32  mb-0">
    <div class="lg:mx-36 mx-12 flex justify-center items-center sm:min-h-[583px] min-h-[445px]  reval-news-in">
      <div
        class="w-[1172px] md:h-[383px] min-w-[374px] h-[315px] custom-email-gradient overflow-hidden rounded-[20px] text-white flex flex-col justify-center items-center relative"
      >
        <img
          src="../../assets/email-union.png"
          class="hidden md:block absolute top-0 left-0 opacity-40 select-none"
        >
        <h3 class="font-semibold md:text-[55px] text-[36px] leading-[66px] mb-3 font-Inter">Get Updates</h3>
        <h5
          class="font-medium md:text-[22px] text-base leading-[26px] md:mb-3 mb-4 md:max-w-1440 sm:max-w-[358px] max-w-[312px] text-center font-Inter "
        >
          Get
          updated when
          portalverse launches its
          beta
          projects
        </h5>

        <div
          id="mc_embed_signup"
          class="md:h-[112px]  flex justify-around  items-center z-10 md:flex-nowrap flex-wrap mb-3 font-Inter"
        >
          <form
            action="https://portalverse.us13.list-manage.com/subscribe/post?u=09cd99e29edef3146a8d05cb1&amp;id=381d4ba567&amp;f_id=00b4e3e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div
              id="mc_embed_signup_scroll"
              class="md:h-[112px]  flex justify-around  items-center z-10 md:flex-nowrap flex-wrap mb-3 font-Inter"
            >
              <div class="mc-field-group sm:w-[358px] w-[312px] h-[64px] md:mr-5">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email w-full h-[64px] rounded-2xl bg-[#342A38] text-[#DCDCDCCC] font-medium pl-4 outline-none "
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                  required
                >
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              ><input
                  type="text"
                  name="b_09cd99e29edef3146a8d05cb1_381d4ba567"
                  tabindex="-1"
                  value=""
                ></div>
              <div class="optionalParent">
                <div class="clear foot font-bold text-xly">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button   md:w-[281px] w-[312px] h-[64px] rounded-[20px] border flex justify-center items-center hover:text-black hover:bg-white cursor-pointer active:bg-transparent  active:text-white md:mt-0 mt-5 md:bg-transparent bg-white md:text-white text-black font-bold text-xl  text-center select-none "
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import scrollReveal from 'scrollreveal';
// import "@/api/email.js";
function subscribeBtn () {
  alert('Function not enabled')
}
const scrollRev = scrollReveal()
const email = ref('')
function subscribe (email) {
  // subscribeEmail(email)
  let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,4})$/
  const validate = reg.test(email)
  if (!validate) {
    return
  }
  const res = subscribeEmail(email)
  console.log(res)

}

onMounted(() => {
  scrollRev.reveal('.reval-news-in', {
    origin: 'bottom',
    duration: 1500,
    delay: 400,
  })
})
</script>


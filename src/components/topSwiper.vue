<template>
   <!-- Swiper -->

   <div class="swiper mySwiper" ref="topSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide relative text-white text-center flex items-center justify-center">
       <div class="h-full">
        <img src="../assets/images/slide_02.jpg" alt="slide" class="absolute h-full w-full xl:h-auto">
        <div class="relative text-3xl pt-80 font-light">online</div>
        <div class="relative text-4xl xl:text-9xl font-thin">Marketing</div>
        <div class="relative text-3xl">Solutions</div>
        <div class="relative text-white transition-all duration-300 bg-secondary hover:bg-transparent hover:border-secondary hover:border-2 mt-12 mb-56 mx-auto py-6 px-8 rounded-full cursor-pointer font-bold w-48">GET STARTED</div>
       </div>
      </div>
      <div class="swiper-slide relative text-white text-center flex items-center justify-center">
       <div>
        <img src="../assets/images/slide_03.jpg" alt="slide" class="absolute h-full w-full xl:h-auto">
        <div class="relative text-3xl pt-80 font-light">Modern</div>
        <div class="relative text-4xl xl:text-9xl font-thin">Marketing & design</div>
        <div class="relative text-3xl mt-6">That works</div>
        <div class="relative text-white transition-all duration-300 bg-secondary hover:bg-transparent hover:border-secondary hover:border-2 mt-12 mb-56 mx-auto py-6 px-8 rounded-full cursor-pointer font-bold w-48">GET STARTED</div>
       </div>
      </div>
      <!-- <div class="swiper-slide relative text-white text-center flex items-center justify-center">
       <div>
        <iframe src="https://www.youtube.com/embed/UBufeh1yv2c?feature=oembed&amp;;showinfo=0&amp;;autoplay=1&amp;;controls=0&amp;;mute=1&amp;;loop=1&amp;;playlist=UBufeh1yv2c" allowfullscreen="" class="absolute inset-0 h-full w-full xl:h-auto brightness-50"></iframe>
        <div class="relative text-3xl pt-80 font-light">welcome to</div>
        <div class="relative text-4xl xl:text-9xl font-thin">it agency</div>
        <div class="relative text-3xl mt-6">Web Design, Marketing & Branding</div>
        <div class="relative text-white transition-all duration-300 bg-secondary hover:bg-transparent hover:border-secondary hover:border-2 mt-12 mb-56 mx-auto py-6 px-8 rounded-full cursor-pointer font-bold w-48">GET STARTED</div>
       </div>
      </div> -->
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore ,{Navigation} from 'swiper/core'

SwiperCore.use([Navigation])

export default {
    name:'topSwiper',
    mounted(){
        new Swiper(this.$refs.topSwiper,{
            loop:true,
            clickable:true,
            autoplay: {
            delay: 2500,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        })
    }
}
</script>

<style>
   .swiper-button-next{
      background-color: rgba(0, 0, 0, 0.12)!important;
      color: white!important;
      font-size: 9px!important;
      border-top-left-radius:80px;
      border-bottom-left-radius:80px;
      display: block;
      height: 77px;
      width: 200px;
      right: -146px;
      transition: all .4s;
   }
   .swiper-button-prev{
      background-color: rgba(0, 0, 0, 0.12)!important;
      color: white!important;
      font-size: 9px!important;
      border-top-right-radius:80px;
      border-bottom-right-radius:80px;
      display: block;
      height: 77px;
      width: 200px;
      left: -146px;
      transition: all .4s;
   }
   .swiper-button-next:hover{
     background-color: #ff497c!important;
     right: -120px;
   }
   .swiper-button-prev:hover{
     background-color: #ff497c!important;
     left: -120px;
   }
   .swiper-button-next::after{
    font-size: 20px!important;
    position: relative!important;
    top: 29px;
    left: 18px;
   }
   .swiper-button-prev::after{
    font-size: 20px!important;
    position: relative!important;
    top: 29px;
    right: -169px;
   }

</style>
<template>
  <section class="section-activity-swiper">
    <swiper

      :slides-per-view="1.5"  
      :centered-slides="true"  
      :space-between="10"  
      :navigation="{
        nextEl: '.swiper-button-next', // 下一则
        prevEl: '.swiper-button-prev' // 上一则
      }"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../assets/pic/activity/activity-7.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-8.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-9.jpg" alt=""></swiper-slide>
      <button class="swiper-button-next"></button>
      <button class="swiper-button-prev"></button>
    </swiper>
  </section>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style lang="scss" scoped>
	.swiper-button-next,
  .swiper-button-prev
  {
     width: 50px;
     height:50px;
     background-color: white;
     border: 1px solid #B1241A;
     border-radius: 50%;
		 color: #B1241A;

     &::after{
font-size: 20px;
font-weight: bold;
     }
	}

  .section-activity-swiper{
  width: 100%;
  border:2px solid purple;

  .swiper {
    width: 50%;
    border-radius: 30px;
    border:2px solid green;
  }
  
  .swiper-slide {
   width: 100%;
   border:2px solid blue;

   >img{
    width: 100%;
    height: 100%;
   }

  }

}
</style>
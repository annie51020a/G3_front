<template>
    <div class="swiper-container">
        <swiper ref="swiperRef" :slidesPerView="'auto'" :centeredSlides="false" :spaceBetween="30" :loop="true"
            :navigation="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false
            }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="n in 6" :key="n">Slide {{ n }}</swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
        };
    },
};
</script>

<style>

.swiper-container {
    display: flex;
    justify-content: flex-end;
    align-items: end;
    /* 将 Swiper 组件放在右侧 */
    width: 100%;
    height: 100%;
    /* 全屏高度 */
}

.mySwiper {
    width: 70%;
    height: 100%;
}

.swiper{
    margin: 0 0;
    display: flex;
    flex-direction: column;
    position: relative;
}
.swiper-slide {
    width: 25%;
    /* 设置每个 slide 的宽度 */
    height: 300px;
    /* 设置每个 slide 的高度 */
    background-color: lightgray;
    /* 示例背景色，方便查看 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-prev,
.swiper-button-next {
    margin: 0;
    left: 0;
    right: 0;
    color: #B1241A;
    /* 设置箭头颜色 */
    border-radius: 50%;
    /* 设置圆角 */
    width: 60px;
    /* 设置宽度 */
    height: 60px;
    /* 设置高度 */
    background-color: white;
    /* 示例背景色，方便查看 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    /* 确保箭头在最上层 */
}

.swiper-button-prev {
    /* 将 prev 按钮放在左边 */
    margin-right: 10px;
    position: absolute;
    left: 40%;
    top: 0%;
}

.swiper-button-next {
    margin-right: 10px;
    position: absolute;
    left: 47%;
    top: 0%;
}
</style>
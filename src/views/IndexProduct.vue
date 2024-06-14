<template>
    <section class="section-product-bg"></section>
    <section class="section-product">
        <div class="container-product">
            <div class="product-row">
                <div class="product-title">
                    <h2><img src="../assets/pic/index-cloud.png" alt="cloud">商品列表</h2>
                </div>
                <!-- <div class="product-arrow">
                    <div class="product-arrow-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 50 0)" fill="white" />
                            <path d="M27.551 20.4081L22.9592 25L27.0408 29.0816" stroke="#B1241A"
                                stroke-linecap="round" />
                        </svg>

                    </div>
                    <div class="product-arrow-btn">

                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="white" />
                            <path d="M22.449 20.4081L27.0408 25L22.9592 29.0816" stroke="#B1241A"
                                stroke-linecap="round" />
                        </svg>
                    </div>
                </div> -->
            </div>
        </div>



        <div v-if="responseData.length === 0">loading...</div>
        <div v-else-if="displayData.length === 0">nodata...</div>
        <div v-else class="product-loop">
            <swiper class="cardlist" :slides-per-view="'auto'" :space-between="25" @swiper="onSwiper"
                @slideChange="onSlideChange" :navigation="true" :modules="modules" :centeredSlides="false" >
                <swiper-slide v-for="item in displayData" :key="item.id">
                    <IndexProductCard :item="item" />
                </swiper-slide>
            </swiper>
        </div>


    </section>
</template>

<script>

import IndexProductCard from '@/components/layout/IndexProductCard.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        IndexProductCard,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },
    data() {
        return {
            responseData: [],
            displayData: []
        }
    },
    //可以用create也可以用mounted
    // created() {
    mounted() {
        fetch("/products.json")
            .then(res => res.json())
            .then(json => {
                // 確認有沒有response
                console.log(json);
                // 備份還原用
                this.responseData = json
                // 顯示用
                this.displayData = json
            })
    },
    methods: {
        clear() {
            this.displayData = this.responseData
        },
        filterTag(tagName) {
            this.displayData = this.responseData.filter((item) => {
                return item.tag === tagName
            })
        }
    }
}


</script>

<style lang="scss">
.section-product-bg {
    width: 100%;
    height: 95px;
    background-color: #FFFBF6;
    background-image: url('../assets/pic/index-product-bg.png');
    background-position: top center;
    background-repeat: repeat-x;
}

.section-product {
    background-color: #CB2E27;
    padding-bottom: 50px;

    .container-product {
        padding: 50px 0;
        width: 80%;
        margin: 0 auto;

        .product-row {
            display: flex;
            justify-content: space-between;

            .product-title {
                h2 {
                    color: white;
                    margin-bottom: 50px;
                }
            }

            .product-arrow {
                display: flex;
                gap: 30px;
            }

        }
    }

    .product-loop {
        display: flex;
        justify-content: flex-end;

        .cardlist {
            width: 70%;
            margin: 0;

            .swiper-button-prev,
            .swiper-button-next {
                margin: 0;
                left: 0;
                right: 0;
                color: #B1241A;
                border: #B1241A 1px solid;
                /* 设置箭头颜色 */
                border-radius: 50%;
                /* 设置圆角 */
                width: 60px;
                /* 设置宽度 */
                height: 60px;
                /* 设置高度 */
                background-color: white;
                /* 示例背景色，方便查看 */
                z-index: 10;
                /* 确保箭头在最上层 */
                transition: 0.5s;
                &:after {
                            font-size: 10px;
                        }
                &:hover {
                    color: #fff;
                    background-color: #B1241A;
                    
                }
            }

            .swiper-button-prev {
                /* 将 prev 按钮放在左边 */
                position: absolute;
                left: 0%;
                top: 0%;
            }

            .swiper-button-next {
                position: absolute;
                left: 90px;
                top: 0%;
            }

            .swiper-slide {
                // width:280px;/*设为固定值*/
                width: auto;
                /*根据内容调整宽度*/
            }

        }
    }



}
</style>

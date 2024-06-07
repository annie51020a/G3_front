<template>
    <section class="section index-news">
        <div class="index-container">
            <div class="index-news-main-title">
                <picture class="title-pic">
                    <img src="/src/assets/pic/red-semicircle.png" alt="">
                </picture>
                <h2 class="title">最新消息</h2>
            </div>
            <div class="index-card-list">
                <section class="index-card" 
                v-for="data in card" 
                :key="data.src">
                    <picture class="index-card-pic">
                        <img :src="data.src" alt="" />
                    </picture>
                    <div class="index-card-txt">
                        <div class="media-center">
                            <div class="index-card-date-status">
                                <p class="index-card-status">News</p>
                                <p class="index-card-data">2023.06.01</p>
                            </div>
                            <div class="index-card-content">
                                <p class="index-card-content-txt">
                                    近期，傳統油紙傘在國際市場上備受矚目。多家知名品牌及設計師紛紛將油紙傘推向國際舞台，受到外國消費者的熱烈歡迎。                                
                                </p>
                            </div>
                            <a href="#" class="arrow-right">
                                <img src="../assets/pic/product-right.png" alt="">
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div class="index-more">
                <a href="#" class="index-more-txt">更多消息</a>
            </div>
        </div>
    </section>
</template>
    
<script>
export default {
    data() {
        return {
            card: [
            {
                src: '/src/assets/pic/2.jpg'
            },
            {
                src: '/src/assets/pic/banner-img.png'
            },
            {
                src: '/src/assets/pic/profile_24.jpg'
            },
            {
                src: '/src/assets/pic/takuya-matsuo-TjzUflpAx7k-unsplash.jpg'
            }
            ],
        }
    },
    methods: {
        
    },
    mounted() {
    }
}
</script>
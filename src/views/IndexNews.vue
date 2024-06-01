<template>
    <section class="section index-news">
        <div class="index-wrap">
            <h2 class="title">最新消息</h2>
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
                                <p class="index-card-data">2023.06.01</p>
                                <p class="index-card-status">News</p>
                            </div>
                            <div class="index-card-content">
                                <p class="index-card-content-txt">
                                    近期，傳統油紙傘在國際市場上備受矚目。多家知名品牌及設計師紛紛將油紙傘推向國際舞台，受到外國消費者的熱烈歡迎。這一舉動不僅有助於推廣中國傳統文化，還為油紙傘產業注入了新的活力。
                                </p>
                            </div>
                        </div>
                            <a href="#" class="material-symbols-outlined"> chevron_right </a>
                    </div>
                </section>
            </div>
        </div>
        <div class="index-more">
            <a href="#" class="index-more-txt">更多消息</a>
        </div>
    </section>
    <span class="material-symbols-outlined"> chevron_right </span>
</template>
    
<script>
export default {
    data() {
        return {
            card: [
            {
                src: '../../pic/2.jpg'
            },
            {
                src: '../../pic/banner-img.png'
            },
            {
                src: '../../pic/profile_24.jpg'
            },
            {
                src: '../../pic/takuya-matsuo-TjzUflpAx7k-unsplash.jpg'
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
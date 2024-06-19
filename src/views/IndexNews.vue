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
                v-for="item in sortedAndFilteredData" 
                :key="item.id">
                    <picture class="index-card-pic">
                        <img :src="item.image" alt="" />
                    </picture>
                    <div class="index-card-txt">
                        <div class="media-center">
                            <div class="index-card-titl">
                                <p class="index-card-class">{{ item.class }}</p>
                                <p class="index-card-name">{{ item.name }}</p>
                                <p class="index-card-date">{{ item.date }}</p>
                            </div>
                            <p class="index-card-content">
                                {{ item.details }}
                            </p>
                        </div>
                        <div class="arrow-right" >
                            <img src="../assets/pic/product-right.png" alt="" @click="goToNewsPage">
                        </div>
                    </div>
                </section>
            </div>
            <div class="index-more">
                <div class="index-more-txt" @click="goToNewsPage">更多消息</div>
            </div>
        </div>
    </section>
</template>
    
<script>
export default {
    data() {
        return {
            news_data: [],
            news_related_data: [],
            combinedData: []
        }
    },
    computed: {
        sortedAndFilteredData() {
            // 将combinedData按照日期降序排序，并只取前四个元素
            return this.combinedData
                .slice()
                .sort((a, b) => {
                    const dateA = new Date(a.date.replace(/年|月/g, '-').replace('日', ''));
                    const dateB = new Date(b.date.replace(/年|月/g, '-').replace('日', ''));
                    return dateB - dateA;
                })
                .slice(0, 4);
        }
    },
    mounted() {
        Promise.all([
            fetch(`${import.meta.env.BASE_URL}news.json`).then(res => res.json()),
            fetch(`${import.meta.env.BASE_URL}news_related.json`).then(res => res.json())
        ])
        .then(([newsData, newsRelatedData]) => {
            console.log(newsData);
            console.log(newsRelatedData);
            this.news_data = newsData;
            this.news_related_data = newsRelatedData;
            this.combinedData = [...this.news_data, ...this.news_related_data];
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
    },
    methods: {
        goToNewsPage(){
            this.$router.push({ name: 'news'});
        }
    }
}
</script>
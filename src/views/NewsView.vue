<template>
    <section class="section news-banner">
        <div class="container">
            <h1 class="title">最新消息</h1>
        </div>
    </section>
    <section class="conduct">
        <p class="conduct-title">舉辦活動 (工作室、市集)</p>
        <div class="news-wrap">
            <div class="news-border">
                <div class="news-card" v-for="item in news_data" :key="item.id">
                    <div class="news-title">
                        <p class="news-date-name">
                        {{ item.date }} - {{ item.name }}
                        </p>
                        <picture class="down-arrow">
                            <img src="/src/assets/pic/news/down-arrow.png" alt="">
                        </picture>
                    </div>
                    <div class="news-content">
                        <picture class="news-pic">
                            <img :src="item.image" alt="">
                        </picture>
                        <div class="news-txt">
                            <p class="date">
                            活動日期 : {{item.date}}
                            </p>
                            <p class="activity-intro">
                                活動介紹 : {{item.details}}
                            </p>
                            <ul class="list">
                                <li v-for="i in item.li.length" :key="i">{{ item.li[i-1] }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            news_data:[],
            li: []
        }
    },
    mounted() {
        fetch("/public/news.json")
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.news_data = json
            });
    },
    methods: {

    }
}
</script>

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
                    <div class="news-title" @click="showNews(item.date, item.name)">
                        <p class="news-date-name">
                        {{ item.date }} - {{ item.name }}
                        </p>
                        <picture class="down-arrow">
                            <img class="arrow" src="/src/assets/pic/news/down-arrow.png" alt="">
                        </picture>
                    </div>
                    <div class="news-content" v-show="showList.includes(`${item.date}-${item.name}`)">
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

    <section class="conduct">
        <p class="conduct-title">傳統技藝相關活動信息</p>
        <div class="news-wrap">
            <div class="news-border">
                <div class="news-card" v-for="item in news_related_data" :key="item.id">
                    <div class="news-title" @click="showNews(item.date, item.name)">
                        <p class="news-date-name">
                        {{ item.date }} - {{ item.name }}
                        </p>
                        <picture class="down-arrow">
                            <img src="/src/assets/pic/news/down-arrow.png" alt="">
                        </picture>
                    </div>
                    <div class="news-content" v-show="showList.includes(`${item.date}-${item.name}`)">
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


<script >
export default {
    data() {
        return {
            news_data:[],
            news_related_data:[],
            li: [],
            contentBox: false,
            showList:[]
        }
    },
    mounted() {
        Promise.all([
            fetch("/public/news.json").then(res => res.json()),
            fetch("/public/news_related.json").then(res => res.json())
    ]   )
        .then(([newsData, newsRelatedData]) => {
            console.log(newsData);
            console.log(newsRelatedData);
            this.news_data = newsData;
            this.news_related_data = newsRelatedData;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
    },
    methods: {
        showNews(date, name) {
            const key = `${date}-${name}`;
            if (this.showList.includes(key)) {
                this.showList = this.showList.filter(item => item !== key); 
            } else {
                this.showList.push(key); 
            }

            const newsCards = document.querySelectorAll('.news-card');
            newsCards.forEach(card => {
                const cardDate = card.querySelector('.news-date-name').textContent.split(' - ')[0].trim();
                const cardName = card.querySelector('.news-date-name').textContent.split(' - ')[1].trim();
                const cardKey = `${cardDate}-${cardName}`;

                card.style.backgroundColor = this.showList.includes(cardKey) ? '#FFF9F1' : '#FFFF';
                });
                }

        },
    }
</script>

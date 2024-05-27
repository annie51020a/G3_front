<template>
    <h2 class="title">最新消息</h2>
    <div class="card-list">
        <section class="card">
            <picture class="card-pic">
                <img :src="src" alt="">
            </picture>
            <div class="card-date-status">
                <p class="card-data">2023.06.01</p>
                <p class="card-status">News</p>
            </div>
            <p class="txt">傳統油紙傘開始進入國際市場，受到外國消費者的歡迎。一些知名品牌和設計師將
            油紙傘引入國際舞台，推廣中國傳統文化。
            </p>
            <p class="card-arrow-right">></p>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src: '../../pic/2.jpg'
            }
        }
    }
</script>

<style lang="scss">

</style>
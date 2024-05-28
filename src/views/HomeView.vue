<script setup>
import IndexBanner from './IndexBanner.vue'
import IndexProductPopular from './IndexProductPopular.vue'
</script>

<template>
  <IndexBanner />
  <IndexProductPopular />
  <section class="section index-news">
    <h2 class="title">最新消息</h2>
    <div class="index-card-list">
      <section class="index-card" v-for="data in card" :key="data.src">
        <picture class="index-card-pic">
          <img :src="data.src" alt="" />
        </picture>
        <div class="index-card-txt">
          <div class="index-card-date-status">
            <p class="index-card-data">2023.06.01</p>
            <p class="index-card-status">News</p>
          </div>
          <div class="index-card-content">
            <p class="index-card-content-txt">
              傳統油紙傘開始進入國際市場，受到外國消費者的歡迎。一些知名品牌和設計師將
              油紙傘引入國際舞台，推廣中國傳統文化。
            </p>
            <a href="#" class="index-card-arrow-right">
              <span class="material-symbols-outlined"> chevron_right </span>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div class="index-more">
      <a href="#" class="more-txt">更多消息</a>
    </div>
  </section>
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
          src: '../../pic/20220224-XUw3HlhUDdujEO9QnxRD8z4Pa6G6XhSIlOemdBUe.jpg'
        },
        {
          src: '../../pic/profile_24.jpg'
        },
        {
          src: '../../pic/takuya-matsuo-TjzUflpAx7k-unsplash.jpg'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss"></style>

<!-- <template>
  <main>
    <IndexBanner />
    <IndexProductPopular />
  </main>
</template> -->

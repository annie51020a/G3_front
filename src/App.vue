<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->


<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="hello" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/activity">活動資訊</RouterLink>
        <RouterLink to="/product">周邊商品</RouterLink>
        <RouterLink to="/quiz">知識小學堂</RouterLink>
      </nav>
      <SectionA />
    </div>
  </header>

  <MainFooter />
  <RouterView />
  <MainHeader />
</template>

<script>
// import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SectionA from './components/home/SectionA.vue';
import MainFooter from './components/home/MainFooter.vue';
import MainHeader from './components/home/MainHeader.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    SectionA,
    MainFooter,
    MainHeader
  }
}
</script>


<style lang="scss">
  
</style>

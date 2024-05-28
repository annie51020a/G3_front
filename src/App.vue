<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->


<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="hello" />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/product">周邊商品</RouterLink>
      </nav>
    </div>
  </header>

  <MainFooter />
  <RouterView />
  <MainHeader />
</template>

<script>
// import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import MainFooter from './components/home/MainFooter.vue';
import MainHeader from './components/home/MainHeader.vue';
// import ActivityView from './views/ActivityView.vuex';

export default {
  components: {
    RouterLink,
    RouterView,
    MainFooter,
    MainHeader,
    // ActivityView,
  }
}
</script>


<style lang="scss">
  
</style>

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->


<template>
<<<<<<< HEAD
=======
  <header>
    <div class="wrapper">
      <HelloWorld msg="hello" />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/activity">活動資訊</RouterLink>
        <RouterLink to="/product">周邊商品</RouterLink>
        <RouterLink to="/quiz">知識小學堂</RouterLink>
      </nav>
    </div>
  </header>

  <MainFooter />
  <RouterView />
>>>>>>> Ven
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>

<script>
// import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import MainFooter from './components/home/MainFooter.vue';
import MainHeader from './components/home/MainHeader.vue';

export default {
  components: {
    RouterView,
    MainFooter,
    MainHeader,
  }
}
</script>

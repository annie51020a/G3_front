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
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/news">News</RouterLink>
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

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->


<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="hello" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
      </nav>
      <sectionA />
      <sectionB />
      <sectionC />
    </div>
  </header>

  <RouterView />
</template>

<script>
// import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import SectionA from './components/home/SectionA.vue';
import SectionB from './components/home/SectionB.vue';
import SectionC from './components/home/SectionC.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld,
    SectionA,
    SectionB,
    SectionC
  }
}
</script>


<style scoped>
section {
  background-color: red;
  height: 90vh;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
}
</style>

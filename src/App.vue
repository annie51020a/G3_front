<template>
  <MainHeader />
  <IndexLoginView />
  <RouterView />
  <MainFooter />
</template>

<script>
import { RouterView } from 'vue-router';
import MainFooter from './components/home/MainFooter.vue';
import MainHeader from './components/home/MainHeader.vue';
import IndexLoginView from './views/IndexLoginView.vue';


export default {
  components: {
    RouterView,
    MainFooter,
    MainHeader,
    IndexLoginView,
  }
}
</script>

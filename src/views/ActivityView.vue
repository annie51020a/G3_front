<template>

  <section class="section-activity-banner">
    <div class="activity-banner">
      <h1>活動資訊</h1>
    </div>
  </section>
  <section class="section-activity-nav">
    <div class="activity-category">
      <div class="register">
        <h4>報名</h4>
        <button>全部</button>
        <button>進行中</button>
        <button>已結束</button>
      </div>
      <div class="category">
        <h4>類型</h4>
        <button>全部</button>
        <button>DIY 手作</button>
        <button>導覽預約</button>
        <button>文創市集</button>
      </div>
    </div>
    <div class="search-filter">
      <div class="search-box"><img src="@/assets/pic/search.png" alt=""><input @input="filterData" type="text"
          v-model="search" class="search-input" placeholder="搜尋活動名稱"><i class="fa-solid fa-x" @click="clear"></i></div>
      <button><img src="@/assets/pic/filter.png" alt="">篩選</button>
    </div>
  </section>
  <section class="section-activity">
    <div class="activity-card" v-for="(activity, index) in activities" :key="index"
      @click="goToActivityDetail(activity.id)">
      <div class="card-pic">
        <img :src="activity.pic" alt="活動圖片">
      </div>
      <div class="card-title">
        <h5>{{ activity.title }}</h5>
      </div>
      <div class="card-date">{{ activity.date }}</div>
      <div class="card-time1">{{ activity.time1 }}</div>
      <div class="card-time2">{{ activity.time2 }}</div>
      <div class="card-loc"><img src="@/assets/pic/activity/map.png" alt="">{{ activity.loc }}</div>
      <div class="card-price">{{ activity.price }}</div>
    </div>
  </section>
</template>

<script>
import activities from '../../public/activities.json';

export default {
  name: 'ActivityView',
  data() {
    return {
      activities,
      responseData: activities,
      search: "",
    };
  },
  methods: {
    goToActivityDetail(id) {
      this.$router.push({ name: 'activitydetail', params: { id } });
    },
    filterData() {
      console.log(this.search);
      this.activities = this.responseData.filter((activity) => {
        return activity.title.includes(this.search);
      });
    },
    clear() {
      this.search = "";
      this.activities = this.responseData;
    },
  }
};
</script>
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
        <button @click="filterByStatus('全部')">全部</button>
        <button @click="filterByStatus('進行中')">進行中</button>
        <button @click="filterByStatus('已結束')">已結束</button>
      </div>
      <div class="category">
        <h4>類型</h4>
        <button @click="filterByType('全部')">全部</button>
        <button @click="filterByType('DIY 手作')">DIY 手作</button>
        <button @click="filterByType('導覽預約')">導覽預約</button>
        <button @click="filterByType('文創市集')">文創市集</button>
      </div>
    </div>
    <div class="search-filter">
      <div class="search-box"><img src="@/assets/pic/search.png" alt=""><input @input="filterData" type="text"
          v-model="search" class="search-input" placeholder="搜尋活動名稱"><i class="fa-solid fa-x" @click="clear"></i></div>
      <button @click="toggleFilterPopup"><img src="@/assets/pic/filter.png" alt="">篩選</button>
      <div v-if="showFilterPopup" class="filter-popup">
        <div class="filter-popup-content">
        <h3>Filter Options</h3>
        <button @click="closeFilterPopup">Close</button>
        <!-- Add filter options here -->
      </div>
      </div>
    </div>
  </section>
  <section class="section-activity">
    <div class="activity-card" v-for="(activity, index) in filteredActivities" :key="index"
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
      currentStatus: '全部',
      currentType: '全部',
      showFilterPopup: false
    };
  },
  computed: {
    filteredActivities() {
      // 對 activities 數據進行篩選
      return this.activities.filter(activity => {
        // 檢查活動的狀態是否匹配當前篩選條件
        const matchesStatus = this.currentStatus === '全部' || activity.status === this.currentStatus;
        // 檢查活動的類型是否匹配當前篩選條件
        const matchesType = this.currentType === '全部' || activity.type === this.currentType;
        // 檢查活動的標題是否包含搜索關鍵字
        const matchesSearch = activity.title.includes(this.search);
        // 只有當活動同時滿足狀態、類型和搜索條件時，才會被篩選出來
        return matchesStatus && matchesType && matchesSearch;
      });
    }
  },
  methods: {
    goToActivityDetail(id) {
      this.$router.push({ name: 'activitydetail', params: { id } });
    },
    filterByStatus(status) {
      this.currentStatus = status;
    },
    filterByType(type) {
      this.currentType = type;
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
    toggleFilterPopup() {
      this.showFilterPopup = !this.showFilterPopup;
      if (this.showFilterPopup) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    closeFilterPopup() {
      this.showFilterPopup = false;
      document.body.style.overflow = 'auto';
    }
  }
}
</script>
<!-- 
<style lang="scss" scoped>
.filter-popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.filter-popup-content {
  width: 300px;
  height: 300px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style> -->
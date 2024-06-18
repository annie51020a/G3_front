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
          <button class="closebtn" @click="closeFilterPopup">✖</button>
          <h4>篩選</h4>
          <h5>地點</h5>
          <div class="filter-loc">
            <button>
              <p>高雄</p>
            </button>
            <button>
              <p>台北</p>
            </button>
          </div>
          <h5>活動日期</h5>
          <div class="filter-date">
            <img src="../assets/pic/activity/calendar.png" alt="">
            <button>
              <p>日期選擇</p>
            </button>
          </div>
          <hr>
          <div class="filter-result">
            <button class="clear"><p>清除</p></button>
            <button class="result"><p>查看結果</p></button>
          </div>
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

export default {
  name: 'ActivityView',
  data() {
    return {
      activities: [],
      responseData: [],
      search: "",
      currentStatus: '全部',
      currentType: '全部',
      showFilterPopup: false
    };
  },
  mounted() {
    fetch(`${import.meta.env.BASE_URL}activities.json`)
      .then(response => response.json())
      .then(data => {
        this.activities = data;
        this.responseData = data;
      })
      .catch(error => console.error('Error fetching activities:', error));
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

<style lang="scss" scoped>
.filter-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .filter-popup-content {
    width: 400px;
    height: 400px;
    background-color: #FAF8F4;
    border: 1px solid #564A41;
    border-radius: 30px;
    position: relative;

    >h4 {
      margin: 20px 0px 0px 20px;
    }

    >h5 {
      margin: 30px 0px 20px 20px;
    }

    .closebtn {
      cursor: pointer;
      border: 0;
      background: transparent;
      position: absolute;
      right: -35px;
      top: -10px;
      font-size: 25px;
      color: #FAF8F4;
    }

    .filter-loc {
      margin-left: 20px;
      display: flex;
      gap: 30px;

      >button {
        border: 1px solid #A9A8A8;
        border-radius: 20px;
        background: transparent;
        cursor: pointer;

        &:hover {
          background-color: #BE1A0E;
          color: white;
        }

        >p {
          padding: 10px 20px;

          &:hover {
            color: white;
          }
        }

      }

    }

    .filter-date {
      width: 100px;
      display: flex;
      border: 1px solid #A9A8A8;
      border-radius: 20px;
      cursor: pointer;


      margin-left: 20px;
      padding: 10px 20px;

      >img {
        width: 20px;
        height: 22px;
      }

      >button {
        border: 0;
        background: transparent;

      }
    }

    >hr {
      margin: 20px 0;

    }

    .filter-result {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
    }

    .clear{
      border: 0;
      background: transparent;
     
      >p{
        font-size: 20px;
      }

    }



  }
}
</style>
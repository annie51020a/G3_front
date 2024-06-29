<template>
  <section class="section-activity-swiper">
    <swiper :slides-per-view="1.5" :centered-slides="true" :space-between="10" :navigation="{
      nextEl: '.swiper-button-next', // 下一则
      prevEl: '.swiper-button-prev' // 上一则
    }" :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }" :mousewheel="false" :keyboard="true" :loop="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="../assets/pic/activity/activity-9.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-8.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-7.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-9.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/pic/activity/activity-8.jpg" alt=""></swiper-slide>
      <button class="swiper-button-next"></button>
      <button class="swiper-button-prev"></button>
      <div class="swiper-pagination"></div>
    </swiper>
  </section>
  <section class="section-activity-info">
    <div class="activity-info">
      <h4>高雄 | 油紙傘彩繪 DIY 體驗課程</h4>
      <h5>-活動介紹-</h5>
      <p>油紙傘彩繪課程是一個結合傳統工藝與現代藝術的手作體驗活動。參加者將學習如何製作和裝飾油紙傘，了解這項古老技藝的文化背景，並創作出獨一無二的藝術作品。本課程適合所有年齡層，無需任何手工或繪畫基礎。</p>
      <h5>-活動內容-</h5>
      <ol>
        <li>油紙傘的歷史與文化背景
          <ul>
            <li>介紹油紙傘的起源與歷史。</li>
            <li>探討油紙傘在不同文化中的象徵意義和用途。</li>
          </ul>
        </li>
        <li>材料與工具介紹
          <ul>
            <li>認識油紙傘的主要材料：竹骨架、油紙、天然顏料等。</li>
            <li>了解製作油紙傘所需的工具及其用途。</li>
          </ul>
        </li>
        <li>彩繪設計與技法
          <ul>
            <li>教導學員設計獨特的彩繪圖案，從簡單的花草到複雜的圖案。</li>
            <li>指導學員如何上色、暈染及處理細節。</li>
          </ul>
        </li>
        <li>上油與防水處理
          <ul>
            <li>講解傳統上油技術，讓油紙傘具備防水功能。</li>
            <li>演示如何均勻塗抹油漆，確保色彩鮮豔持久。</li>
          </ul>
        </li>
        <li>作品展示與分享
          <ul>
            <li>組織學員展示自己的作品，進行交流與分享創作心得。</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="activity-reservation">
      <div class="session">
        <h4>選擇場次和人數</h4>
      </div>
      <div class="date">
        <h5>活動日期</h5>
        <p>2024.07.14(日)</p>
      </div>
      <div class="session-time">
        <h5>場次時間</h5>
        <div class="time">
          <button @click="chooseTime('10:00~12:00')"
            :class="{ 'choose-time': currentTime === '10:00~12:00' }">10:00~12:00</button>
          <button @click="chooseTime('13:00~15:00')"
            :class="{ 'choose-time': currentTime === '13:00~15:00' }">13:00~15:00</button>
        </div>
      </div>
      <div class="num">
        <h5>選擇人數</h5>
        <div class="amount-button">
          <p>NT${{ price }}/人</p>
          <button @click="minus"><i class="fa-solid fa-minus"></i></button>
          <p>{{ count }}</p>
          <button @click="plus"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div class="total-price">
        <h5>總金額</h5>
        <p>NT${{ total }}</p>
      </div>
      <hr>
      <button class="btn">
        <routerLink to="/checkout_act">立即預約</routerLink>
      </button>

    </div>
  </section>

  <section class="section-activity-notice">
    <div class="activity-notice">
      <h4>注意事項</h4>
    </div>
    <div class="activity-notice-info">
      <div class="know-use-cancel">
        <h5>-預約須知-</h5>
        <ul>
          <li>活動日 6 天前可免費取消。</li>
          <li>手作體驗活動，皆以人頭計費。</li>
          <li>手作課程皆整點開始，請提早 20 分鐘至售票櫃台完成報到並等待入場通知，未完成者皆自動取消不另行通知。</li>
          <li>活動中將會攝影、錄影作為未來宣傳用，若有無法露臉之需求，請於活動開始前告知主辦單位。</li>
        </ul>
        <h5>-如何使用-</h5>
        <ul>
          <li>現場請出示電子憑證。</li>
          <li>需要按照預訂日期及當天開放時間內使用，逾期失效</li>
        </ul>
        <h5>-取消政策-</h5>
        <ul>
          <li>所選日期 6 天（含）之前取消，收取手續費 0%</li>
          <li>所選日期 0 ~ 5 天之間取消，收取手續費 100%</li>
        </ul>
      </div>
      <div class="loc-map">
        <h5>-體驗地點-</h5>
        <ul>
          <li>高雄市前鎮區中華五路123號5樓。(傘韻：油紙傘工作室)</li>
        </ul>
        <div class="mapContainer" ref="mapContainer"></div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import leaflet styles and components
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapMarkerUrl from "../assets/pic/activity/map-marker.png";

export default {

  data() {
    return {
      count: 1,
      price: 499,
      currentTime: '',
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const mapContainer = ref(null);

    onMounted(() => {
      const map = L.map(mapContainer.value, {
        center: [22.602995, 120.306013],
        zoom: 17,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker
      const mapMarker = L.icon({
        iconUrl: mapMarkerUrl,
        iconSize: [35, 70],
        iconAnchor: [15, 75],
      });

      L.marker([22.602995, 120.306013], { icon: mapMarker }).addTo(map);
    });
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      mapContainer,
    };
  },
  computed: {
    total() {
      return this.count * this.price;
    }
  },
  methods: {
    plus() {
      this.count += 1;
    },
    minus() {
      if (this.count == 1) return
      this.count -= 1;
    },
    chooseTime(time) {
      this.currentTime = time;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style";

.mapContainer {
  width: 300px;
  height: 300px;
}

.section-activity-swiper {
  width: 100%;
  margin-top: 40px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    width: 90%;
    height: 350px;
    border-radius: 30px;

    @media (max-width: $sm) {
      height: 250px;
    }

    >img {
      border-radius: 30px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    background-color: white;
    border: 1px solid #BE1A0E;
    border-radius: 50%;
    color: #BE1A0E;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    background-color: #564A41;
    opacity: 1;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 15px;
    height: 15px;
    background-color: #BE1A0E;
  }
}
</style>

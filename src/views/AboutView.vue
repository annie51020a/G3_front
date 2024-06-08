<!-- 
  1.每個section背景多加一點圖案
-->
<template>
  <!-- banner -->
  <section class="about-banner-box">
    <div class="about-banner">
      <h1>關於我們</h1>
    </div>
  </section>
  <!-- 關於我們內文 -->
  <section class="about-content">
    <div class="about-umb1"></div>
    <div class="about-umb2"></div>
    <div class="about-umb3"></div>
    <div class="about-title">
      <h2>油紙傘的歷史與沿革</h2>
    </div>
    <div class="about-history" data-aos="fade-up">
      <div class="history-title">
        <h3>歷史</h3>
      </div>
      <p>
        油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。隨著絲綢之路的開通，油紙傘技術逐漸傳播到日本、韓國和東南亞地區，成為東亞文化的一部分。在唐宋時期，油紙傘工藝達到了頂峰，製作技術日益精湛，並逐步在民間普及。明清時期，油紙傘不僅是實用工具，更是文化和藝術的象徵，文人雅士常以詩詞歌賦歌頌其美。隨著時代的變遷，油紙傘工藝不斷改進，但其傳統製作技藝依然保留，成為中華文化的重要傳承之一。
      </p>
    </div>

    <div class="foot-box">
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="100" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="300" src="@/assets/pic/about/foot2.png" alt="">
      </div>
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="500" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="700" src="@/assets/pic/about/foot2.png" alt="">
      </div>
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="900" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="700" src="@/assets/pic/about/foot2.png" alt="">
      </div>
    </div>

    <div class="about-feature" data-aos="fade-right">
      <div class="feature-title">
        <h3>特色</h3>
      </div>
      <p>
        油紙傘以其獨特的材料和製作工藝著稱。傘骨通常由韌性強的竹子製成，輕巧而堅固。傘面選用高質量的宣紙或綢緞，紙上塗抹防水性能優異的桐油，使其具有良好的防水功能。傘面經常裝飾有精美的繪畫，這些圖案多為中國傳統的山水畫、花鳥圖和古典人物，充滿了濃郁的東方藝術風格。油紙傘的製作過程複雜，需要經過選材、裁剪、上桐油、繪畫、晾乾等多道工序，每一步都要求工匠具備高超的技藝和耐心。這些精緻的工藝和獨特的美學，使油紙傘成為中國傳統文化的重要象徵之一。
      </p>
    </div>

    <div class="foot-box">
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="100" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="300" src="@/assets/pic/about/foot2.png" alt="">
      </div>
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="500" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="700" src="@/assets/pic/about/foot2.png" alt="">
      </div>
      <div class="foot1">
        <img data-aos="fade-down" data-aos-delay="900" src="@/assets/pic/about/foot1.png" alt="">
      </div>
      <div class="foot2">
        <img data-aos="fade-down" data-aos-delay="700" src="@/assets/pic/about/foot2.png" alt="">
      </div>
    </div>

    <div class="about-modern" data-aos="fade-left">
      <div class="modern-title">
        <h3>現代</h3>
      </div>
      <p>
        在現代，油紙傘不僅僅是一種實用的雨具，更是一種藝術品和文化符號。現代的油紙傘在繼承傳統工藝的基礎上，進行了創新和改良，使其更符合當代審美和需求。許多設計師將油紙傘元素融入時尚設計、家居裝飾和舞台藝術中，賦予其新的生命力。在一些文化活動和旅遊景點中，油紙傘被廣泛應用，成為展示當地文化特色的重要媒介。現代油紙傘還被用於婚禮、慶典等儀式中，象徵著吉祥和美好。通過各種媒介的推廣，油紙傘逐漸走向國際，成為世界了解和欣賞中國傳統文化的一扇窗戶。這一古老工藝在現代依然保持著旺盛的生命力，體現了中華文化的傳承與創新。
      </p>
    </div>

    <router-link to="/quiz" class="quiz-link">
      <p>挑戰小遊戲</p>
    </router-link>
  </section>

</template>

<script>
import AOS from 'aos';
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      AOS.refresh(); // 刷新 AOS，確保動畫效果正確初始化
    });
  }
}
</script>


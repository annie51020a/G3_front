<template>
    <footer>
        <div class="footer-top">
                    <RouterLink to="/"><img src="../../assets/pic/footer-top.png" alt="logo"></RouterLink>
                </div>
        <div class="container">
            <div class="brand-info">
                <div class="footer-logo">
                    <RouterLink to="/"><img src="../../assets/pic/footer-logo.png" alt="logo"></RouterLink>
                </div>
                <p>傘韻 SanYun</p>
                <p>地址  桃園市中壢區復興路46號9樓</p>
                <p>電話  (03) 4251108</p>
                <p>信箱  Umbrella@gmail.com</p>
            </div>
            <nav>
                <RouterLink to="/about">關於我們</RouterLink>
                <RouterLink to="/news">最新消息</RouterLink>
                <RouterLink to="/activity">活動資訊</RouterLink>
                <RouterLink to="/product">周邊商品</RouterLink>
                <RouterLink to="/quiz">知識小學堂</RouterLink>
            </nav>
            <div class="social-media">
                <p>社群媒體</p>
                <div class="social-picture"><RouterLink to="/"><img src="../../assets/pic/ant-design_facebook-filled.svg" alt=""></RouterLink><RouterLink to="/"><img src="../../assets/pic/youtube.svg" alt=""></RouterLink></div>
                <div class="social-picture"><RouterLink to="/"><img src="../../assets/pic/flowbite_x-solid.svg" alt=""></RouterLink><RouterLink to="/"><img src="../../assets/pic/ri_instagram-line.svg" alt=""></RouterLink></div>
            </div>
        </div>
        <div class="disclaimer-txt">
            <hr>
            <p>本網站為緯育TibaMe_前端設計工程師班第89期學員專題成果作品,本平台僅供學習、展示之用。若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,緯育公司概不負責。若有侵權疑慮,您可以私訊<a href="https://www.facebook.com/TibaMe">[ 緯育TibaMe ]</a>,後續會由專人協助處理。</p></div>
        </footer>
</template>



<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    }
}
</script>
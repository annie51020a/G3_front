<template>
    <header>
        <div class="header-nav">
            <div class="logo">
                <RouterLink to="/"><img src="../../../pic/logo.png" alt="logo"></RouterLink>
            </div>
            <nav>
                <RouterLink to="/about">關於我們</RouterLink>
                <RouterLink to="/news">最新消息</RouterLink>
                <RouterLink to="/activity">活動資訊</RouterLink>
                <RouterLink to="/product">周邊商品</RouterLink>
                <RouterLink to="/quiz">知識小學堂</RouterLink>
            </nav>
            <div class="icons">
                <img src="../../../pic/icon_cart.svg" alt="購物車">
                <img src="../../../pic/icon_user.svg" alt="會員登入/註冊">
            </div>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    }
}
</script>
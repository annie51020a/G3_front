<template>
    <header>
        <div class="wrapper">
            <HelloWorld msg="hello" />
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">關於我們</RouterLink>
                <RouterLink to="/news">最新消息</RouterLink>
                <RouterLink to="/activity">活動資訊</RouterLink>
                <RouterLink to="/product">周邊商品</RouterLink>
                <RouterLink to="/quiz">知識小學堂</RouterLink>
            </nav>
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
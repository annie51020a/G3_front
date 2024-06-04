<template>
    <header>
        <div class="header-nav">
            <div class="logo">
                <RouterLink to="/"><img src="../../../pic/logo.png" alt="logo"></RouterLink>
            </div>
            <nav>
                <RouterLink 
                    v-for="link in links" 
                    :key="link.path" 
                    :to="link.path">
                    {{ link.name }}
                </RouterLink>
            </nav>
            <div class="icons">
                <button>
                    <a href="#">
                        <img src="../../../pic/icon_cart.svg" alt="購物車">
                    </a>
                </button>
                <button>
                    <a href="#">
                    <img src="../../../pic/icon_user.svg" alt="會員登入/註冊">
                    </a>
                </button>             
            </div>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    },
    data() {
        return {
            links: [
                { name: '關於我們', path: '/about' },
                { name: '最新消息', path: '/news' },
                { name: '活動資訊', path: '/activity' },
                { name: '周邊商品', path: '/product' },
                { name: '知識小學堂', path: '/quiz' }
            ]
        };
    }
}
</script>
<!-- <template>
    <header>
        <div class="header-nav">
            <div class="logo">
                <RouterLink to="/"><img src="../../assets/pic/logo.png" alt="logo"></RouterLink>
            </div>
            <nav class="desktop-menu">
                <ul>
                    <li v-for="link in links" :key="link.path">
                        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
                        <ul v-if="link.submenu">
                            <li v-for="sublink in link.submenu" :key="sublink.path">
                                <RouterLink :to="sublink.path">{{ sublink.name }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="icons">
                <button>
                    <RouterLink to="/cart">
                        <img src="../../assets/pic/icon_cart.svg" alt="購物車">
                    </RouterLink>
                </button>
                <button>
                    <a href="#" @click="loginIn">
                    <img src="../../assets/pic/icon_user.svg" alt="會員登入/註冊">
                    </a>
                </button>
                <button @click="toggleMenu" class="hamberger-menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
        <div v-if="menuOpen" class="mobile-menu">
            <ul>
                <li v-for="link in links" :key="link.path">
                    <RouterLink :to="link.path" @click="toggleMenu">{{ link.name }}</RouterLink>
                    <ul v-if="link.submenu">
                        <li v-for="sublink in link.submenu" :key="sublink.path">
                            <RouterLink :to="sublink.path" @click="toggleMenu">{{ sublink.name }}</RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
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
                { name: '關於我們', path: '/about', submenu: [{ name: '品牌故事', path: '/aboutstory' }, { name: '歷史沿革', path: '#' }] },
                { name: '最新消息', path: '/news' },
                { name: '活動資訊', path: '/activity' },
                { name: '周邊商品', path: '/product' },
                { name: '知識小學堂', path: '/quiz' }
            ],
            menuOpen: false,
        };
    },
    methods: {
        login() {
            const loginBox = document.querySelector(".login-box");
            loginBox.style.opacity = "1";
            loginBox.style.pointerEvents = "auto";
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script> -->

<template>
    <header>
        <div class="header-nav">
            <div class="logo">
                <RouterLink to="/"><img class="desktop-logo" src="../../assets/pic/logo.png" alt="logo"></RouterLink>
                <RouterLink to="/"><img class="mobile-logo" src="../../assets/pic/logo-mobile.svg" alt="logo"></RouterLink>  
                
            </div>
            <nav class="desktop-menu">
                <ul>
                    <li v-for="link in links" :key="link.path">
                        <a v-if="link.submenu" href="#" @click="toggleSubMenu(link)">
                            {{ link.name }}
                        </a>
                        <RouterLink v-else :to="link.path">{{ link.name }}</RouterLink>
                        <ul v-if="link.submenu && link.showSubMenu">
                            <li v-for="sublink in link.submenu" :key="sublink.path">
                                <RouterLink :to="sublink.path">{{ sublink.name }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="icons">
                <button>
                    <RouterLink to="/cart">
                        <img class="desktop-cart" src="../../assets/pic/icon_cart.svg" alt="購物車">
                    </RouterLink>
                    <RouterLink to="/cart">
                        <img class="mobile-cart" src="../../assets/pic/mobile-cart.svg" alt="購物車-手機版">
                    </RouterLink>
                </button>
                <button>
                    <a href="#" @click="loginIn">
                        <img  class="desktop-user" src="../../assets/pic/icon_user.svg" alt="會員登入/註冊">
                        <img class="mobile-user" src="../../assets/pic/mobile-user.svg" alt="會員登入/註冊">
                    </a>
                </button>
                
                <button @click="toggleMenu" class="hamburger-menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
        <!-- <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div> -->
        <!-- 增加遮罩層 -->
        <div v-if="menuOpen" class="mobile-menu">        
        <!-- <div v-if="menuOpen" :class="['mobile-menu', menuOpen ? 'mobile-menu-open' : '']"> -->
            <ul>
                <li v-for="link in links" :key="link.path">
                    <RouterLink :to="link.path" @click="toggleMenu">{{ link.name }}</RouterLink>
                    <ul v-if="link.submenu">
                        <li v-for="sublink in link.submenu" :key="sublink.path">
                            <RouterLink :to="sublink.path" @click="toggleMenu">{{ sublink.name }}</RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
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
                { name: '關於我們', path: '/about', showSubMenu: false, submenu: [{ name: '歷史沿革', path: '/about' },{ name: '品牌故事', path: '/aboutstory' }] },
                { name: '最新消息', path: '/news' },
                { name: '活動資訊', path: '/activity' },
                { name: '周邊商品', path: '/product' },
                { name: '知識小學堂', path: '/quiz' }
            ],
            menuOpen: false,
        };
    },
    methods: {
        loginIn() {
            const loginBox = document.querySelector(".login-box");
            loginBox.style.opacity = "1";
            loginBox.style.pointerEvents = "auto";
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            // const mobileMenu = document.querySelector('.mobile-menu');
            // if (this.menuOpen) {
            //     mobileMenu.classList.add('mobile-menu-open');
            // } else {
            //     mobileMenu.classList.remove('mobile-menu-open');
            // }
        },
        toggleSubMenu(link) {
            link.showSubMenu = !link.showSubMenu;
        },
        handleResize() {
            if (window.innerWidth > 996) {
                this.menuOpen = false;
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    }
</script>
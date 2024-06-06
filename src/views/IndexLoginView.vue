<template>
    <section class="section login-box">
        <div class="login-container">
            <div class="login-wrap">
                <div class="link">
                    <button class="login">會員登入</button>
                    <button class="register">會員註冊</button>
                </div>
                <div class="login-frame">
                    <div class="input-field">
                        <div class="content-container">
                            <div class="login-input">
                                <input class="email" type="email" placeholder="電子郵件">
                                <input class="password" type="password" placeholder="密碼" maxlength="12" minlength="6">
                            </div>
                            <p class="forget">忘記密碼？</p>
                            <button class="btn">登入</button>
                            <p class="quick">使用以下帳號快速登入</p>
                            <div class="login-icon">
                                <a href="#" class="login-goole">
                                <img src="/src/assets/pic/login/google-icon.png" alt="">
                                </a>
                                <a href="#" class="login-facebook">
                                    <img src="/src/assets/pic/login/logos_facebook.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <span class="x" @click="closeLoginInBtn">
                        <img src="/src/assets/pic/login/ph_x-bold.png" alt="">
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        closeLoginInBtn() {
            const closeLoginInBtn = document.querySelector(".x");
            if (closeLoginInBtn) {
                const loginBox = document.querySelector(".login-box");
                loginBox.style.opacity = "0";
                loginBox.style.pointerEvents = "none";

            }
        }
    },
    mounted() {

    }
}
</script>
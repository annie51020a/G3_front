<template>
    <section class="section login-box" v-if="showLoginBox">
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
                                <input class="email" name="memId" type="email" placeholder="電子郵件">
                                <div class="input-icon">
                                    <input class="password" name="memPsw" type="password" placeholder="密碼" maxlength="12" minlength="6">
                                    <picture @click="showPsw" class="eyes">
                                        <img id="eye" src="/src/assets/pic/login/eye-open.svg" alt="" title="open">
                                    </picture>
                                </div>
                            </div>
                            <div class="forget-login-btn">
                                <button class="forget" @click="showForgetPassword">忘記密碼？</button>
                                <button class="btn">登入</button>
                            </div>
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

    <section class="section login-box forget-box">
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
                                <p class="txt">忘記密碼 :</p>
                                <input class="forget-input" type="email" placeholder="請輸入電子郵件">
                            </div>
                            <div class="previous-page-verify">
                                <button class="previous-page-btn" @click="showMemberLogin">
                                    上一頁
                                </button>
                                <button class="btn">
                                    驗證
                                </button>
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
            showLoginBox: true,
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
        },
        showPsw() {
            const eye = document.querySelector("#eye");
            const password = document.querySelector(".password");
            if(eye.title === "open") {
                eye.src = "/src/assets/pic/login/eye-close.svg";
                eye.title = "close";
                password.type = "text";
            } else {
                eye.src = "/src/assets/pic/login/eye-open.svg";
                eye.title = "open";
                password.type = "password";
            }
        },
        checkLogIn() {
            
        },
        showForgetPassword() {
            this.showLoginBox = false;
        },
        showMemberLogin() {
            this.showLoginBox = true;
        }
    },
    mounted() {

    }
}
</script>
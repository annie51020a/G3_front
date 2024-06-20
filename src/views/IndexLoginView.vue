<template>
    <section class="section login-box" >
        <div class="login-container">
            <div class="login-wrap">
                <div class="link">
                    <button class="login">會員登入</button>
                    <button class="register">會員註冊</button>
                </div>
                <div class="login-frame">
                    <!-- for login page use v-if to switch-->
                    <div class="input-field" v-if="forgetPswBox">
                        <div class="content-container">
                            <div class="login-input">
                                <input class="email" name="memId" type="email" placeholder="電子郵件" v-model="emailData" >
                                <div class="input-icon">
                                    <input class="password" name="memPsw" type="password" placeholder="密碼" maxlength="12" minlength="6" v-model="pswData">
                                    <picture @click="showPsw" class="eyes">
                                        <img id="eye" src="/src/assets/pic/login/eye-close.svg" alt="" title="close">
                                    </picture>
                                </div>
                            </div>
                            <div class="forget-login-btn">
                                <button class="forget" @click="showForgetPassword">忘記密碼？</button>
                                <button class="btn" @click="memLogin">登入</button>
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
                    <!-- for forgetPassword page use v-if to switch-->
                    <div class="input-field" v-if="!forgetPswBox">
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
            forgetPswBox: true,
            mem:[],
            emailData: '',
            pswData:''
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
            if(eye.title === "close") {
                eye.src = "/src/assets/pic/login/eye-open.svg";
                eye.title = "open";
                password.type = "text";
            } else {
                eye.src = "/src/assets/pic/login/eye-close.svg";
                eye.title = "close";
                password.type = "password";
            }
        },
        showForgetPassword() {
            this.forgetPswBox = false;
        },
        showMemberLogin() {
            this.forgetPswBox = true;
        },
        memLogin() {
            if((this.emailData === this.mem[0].account) 
                && (this.pswData === this.mem[0].psw)
            ) {
                alert("登入成功!")
                this.emailData = "";
                this.pswData = "";
                const loginBox = document.querySelector(".login-box");
                loginBox.style.opacity = "0";
                loginBox.style.pointerEvents = "none";
            } else {
                alert("帳號或密碼錯誤!")
                this.emailData = "";
                this.pswData = "";
            }
        }
    },
    mounted() {
        fetch(`${import.meta.env.BASE_URL}member.json`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.mem = json
                console.log(this.mem[0]);
            });
    }
}
</script>
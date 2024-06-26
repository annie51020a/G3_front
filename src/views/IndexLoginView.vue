<template>
    <section class="section login-box" >
        <div class="login-container">
            <div class="login-wrap">
                <div class="link">
                    <button class="login" @click="showContent('login');showLogin()">會員登入</button>
                    <button class="register" @click="showContent('register');showRegister()">會員註冊</button>
                </div>
                <div class="login-frame">
                    <!-- for login page use v-if to switch-->
                    <div class="input-field" v-if="content === 'login'">
                        <div class="content-container">
                            <div class="login-input">
                                <input class="email" name="memId" type="email" placeholder="請輸入電子郵件" v-model="emailData" >
                                <div class="input-icon">
                                    <input class="password" name="memPsw" type="password" placeholder="請輸入密碼" maxlength="12" minlength="6" v-model="pswData">
                                    <picture @click="togglePasswordVisibility($event, 'password')" class="eyes">
                                        <img id="eye" src="/src/assets/pic/login/eye-close.svg" alt="" title="close">
                                    </picture>
                                </div>
                            </div>
                            <div class="forget-login-btn">
                                <button class="forget" @click="showContent('forget')">忘記密碼？</button>
                                <button class="btn" @click="memLogin">登入</button>
                            </div>
                            <p class="quick">使用以下帳號快速登入</p>
                            <div class="login-icon">
                                <div class="login-goole" @click="googleSignIn">
                                <img src="/src/assets/pic/login/google-icon.png" alt="">
                                </div>
                                <div class="login-facebook">
                                    <img src="/src/assets/pic/login/logos_facebook.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- for forgetPassword page use v-if to switch-->
                    <div class="input-field" v-if="content === 'forget'">
                        <div class="content-container">
                            <div class="login-input">
                                <p class="txt">忘記密碼 :</p>
                                <input class="forget-input" type="email" placeholder="請輸入電子郵件">
                            </div>
                            <div class="previous-page-verify">
                                <button class="previous-page-btn" @click="showContent('login')">
                                    上一頁
                                </button>
                                <button class="btn">
                                    驗證
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 註冊會員 -->
                    <div class="input-field" v-if="content === 'register'">
                        <div class="content-container">
                                <div class="register-input">
                                    <input class="email" name="memclass" type="email" placeholder="請輸入電子郵件" v-model="emailData" >
                                    <div class="input-icon">
                                        <input class="password" name="memPsw" type="password" placeholder="請輸入密碼" maxlength="12" minlength="6" v-model="password">
                                        <picture @click="togglePasswordVisibility($event, 'password')" class="eyes">
                                            <img id="eye" src="/src/assets/pic/login/eye-close.svg" alt="" title="close">
                                        </picture>
                                    </div>
                                    <div class="input-icon">
                                        <input class="password" name="memPsw" type="password" placeholder="確認密碼" maxlength="12" minlength="6" v-model="confirmPassword">
                                        <picture @click="togglePasswordVisibility($event, 'confirmPassword')" class="eyes">
                                            <img id="eye" src="/src/assets/pic/login/eye-close.svg" alt="" title="close">
                                        </picture>
                                    </div>
                                    <div class="verify-group">
                                        <input class="verify" type="text"  placeholder="請輸入右方驗證碼" maxlength="5" required>
                                        <div class="captcha-img">AB123</div>
                                        <button class="verify-btn" type="submit">驗證</button>
                                    </div>
                                    <div class="gender">
                                        <h5>性別 ：</h5>
                                        <input type="radio" id="gender-man" name="gender" value="man" checked />
                                        <label for="gender-man">男性</label>
                                        <input type="radio" id="gender-girl" name="gender" value="girl" />
                                        <label for="gender-girl">女性</label>
                                        <input type="radio" id="gender-else" name="gender" value="else" />
                                        <label for="gender-else">其他</label>
                                    </div>
                                    <div class="date">
                                        <h5>生日 ：</h5>
                                        <input type="date" value="2000-06-19" min="1960-01-01" max="2006-12-31" />
                                    </div>
                                </div>
                                <button class="register-btn">
                                    註冊
                                </button>
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
import { gapi } from 'gapi-script';

export default {
    data() {
        return {
            content:'login',
            // forgetPswBox: true,
            mem:[],
            emailData: '',
            pswData:'',
            password: '',
            confirmPassword: '',

            loginConsider:true
        }
    },
    methods: {
        // 點擊後更變內容
        showContent(content) {
            this.content = content; 
        },
        showLogin() {
            this.loginConsider = true;

            this.determineLoginOrRegister();
        },
        showRegister() {
            this.loginConsider = false;

            this.determineLoginOrRegister();
        },
        determineLoginOrRegister(){
            const login        = document.querySelector(".login");
            const register     = document.querySelector(".register");

            if (this.loginConsider) {
                login.classList.remove("login-hide")
                register.classList.remove("register-show")
                
                return
            }

            login.classList.add("login-hide");
            register.classList.add("register-show") 
        },
        closeLoginInBtn() {
            const closeLoginInBtn = document.querySelector(".x");
            if (closeLoginInBtn) {
                const loginBox = document.querySelector(".login-box");
                loginBox.style.opacity = "0";
                loginBox.style.pointerEvents = "none";
                this.emailData = "";
                this.pswData = "";
                this.password = "";
                this.confirmPassword = "";
            }
        },
        togglePasswordVisibility(e, field) {
            let x = field;
            console.log(x);
            const eye = e.currentTarget.querySelector("#eye");
            const passwordInput = e.currentTarget.previousElementSibling;
            if (eye.title === "close") {
                eye.src = "/src/assets/pic/login/eye-open.svg";
                eye.title = "open";
                passwordInput.type = "text";
            } else {
                eye.src = "/src/assets/pic/login/eye-close.svg";
                eye.title = "close";
                passwordInput.type = "password";
            }
        },
        // showForgetPassword() {
        //     this.forgetPswBox = false;
        // },
        // showMemberLogin() {
        //     this.forgetPswBox = true;
        // },
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
                this.$router.push('/memberinfo');
            } else {
                alert("帳號或密碼錯誤!")
                this.emailData = "";
                this.pswData = "";
            }
        },
        // 第一種
        googleSignIn() {
            gapi.load('auth2', () => {
            const auth2 = gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID',
            });
            auth2.signIn().then(googleUser => {
            const profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            }).catch(error => {
                console.error('Error signing in: ', error);
                });
            });
        }
        
        // 第二種 搭配 index.html <script></script>
        // googleSignIn() {
        //     const client = google.accounts.oauth2.initTokenClient({
        //         client_id: 'YOUR_GOOGLE_CLIENT_ID',  // 确保这是正确的客户端 ID
        //         scope: 'profile email',
        //         callback: (response) => this.handleCredentialResponse(response),
        //     });
        //     client.requestAccessToken();
        // },
        // handleCredentialResponse(response) {
        //     if (response.error) {
        //         console.error('Authorization error:', response.error);
        //         // 处理授权错误，例如显示错误信息
        //     } else {
        //         console.log('Google login response:', response);
        //         // 在此处添加你的登录逻辑，例如发送 token 到你的后端服务器
        //     }
        // }
    },
    mounted() {
        fetch(`${import.meta.env.BASE_URL}member.json`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.mem = json
                console.log(this.mem[0]);
            });
        gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID'
        });
    });
    }
}
</script>
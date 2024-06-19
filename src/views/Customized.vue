<template>
    <section class="section-customized">
        <div class="customized-bgc-l">
                    <img src="/src/assets/pic/customized/customized-bgc-l.png" alt="">
                </div>
        <div class="customized-bgc-r">
            <img src="/src/assets/pic/customized/customized-bgc-r.png" alt="">
        </div>
        
        <!-- 客製化開始 -->
        <div class="container-customized-start" v-show="currentStep === 1">
                <h1 @click="currentStep++">打造專屬自我風格</h1>
        </div>
        
        <!-- 客製化 step 1 -->
        <div class="container-customized-step1" v-show="currentStep === 2">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">1</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>選擇喜歡的傘面材質</h3>
                </div>
                <div class="pics">
                    <div class="pic">
                        <img src="/src/assets/pic/customized/material_pic1.jpg" alt="">
                        <h4>棉布</h4>
                    </div>
                    <div class="pic">
                        <img src="/src/assets/pic/customized/material_pic2.jpg" alt="">
                        <h4>綢布</h4>
                    </div>
                    <div class="pic">
                        <img src="/src/assets/pic/customized/material_pic3.jpg" alt="">
                        <h4>宣紙</h4>
                    </div>
                </div>
                <div class="next-arrow" @click="currentStep++">
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                    </svg>
                </div>
                
            </div>
        </div>

        <!-- 客製化 step 2 -->
        <div class="container-customized-step2"  v-show="currentStep === 3">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">2</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>設計出你的獨特傘面</h3>
                </div>
                <div class="design-group">
                    <div class="customized-list">
                        <div class="item-list">
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-img.png" alt="">
                                </div>
                                <span>上傳圖片</span>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-template.png" alt="">
                                </div>
                                <span>範本</span>
                            </div>
                            <div class="item" v-show="!showImg">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-i-con.png" alt="">
                                </div>
                                <span>I-Con</span>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-back.png" alt="">
                                </div>
                                <span>上一步</span>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <img src="/src/assets/pic/customized/customized-reset.png" alt="">
                                </div>
                                <span>重置</span>
                            </div>
                        </div>
                        <div class="img-group" v-show="showImg">
                            <div class="pics">
                                <div class="pic">
                                    <img src="/src/assets/pic/customized/Icon-1.png" alt="">
                                </div>
                                <div class="pic">
                                    <img src="/src/assets/pic/customized/Icon-2.png" alt="">
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div class="design">
                        <div class="pic">
                            <img src="/src/assets/pic/customized/design.png" alt="">
                        </div>
                    </div>
                    <div class="preview-item">
                        <div class="preview">
                            <h5>效果預覽</h5>
                            <div class="pic">
                                <img src="/src/assets/pic/customized/Preview.png" alt="">
                            </div>
                        </div>
                        <div class="arrow">
                            <div class="next-arrow back" @click="currentStep--">
                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="next-arrow" @click="currentStep++">
                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.897949 0.816406L10.0816 10.0001L1.91836 18.1633" stroke="#B1241A" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- 客製化 step 3 -->
        <div class="container-customized-step3"  v-show="currentStep === 4">
            <div class="container-box">
                <div class="title">
                    <div class="circle">
                        <span class="num1">3</span>
                        <span class="num2">3</span>
                    </div>
                    <h3>成功打造專屬於你的油紙傘</h3>
                </div>
                <div class="info">
                    <div class="pics">
                        <div class="smallpics">
                            <div class="pic">
                                <img src="/src/assets/pic/customized/finish.jpg" alt="">
                            </div>
                            <div class="pic">
                                <img src="/src/assets/pic/customized/finish.jpg" alt="">
                            </div>
                        </div>
                        <div class="bigpic">
                            <img src="/src/assets/pic/customized/finish.jpg" alt="">
                        </div>
                    </div>    
                    <div class="txt">
                        <h3>特製手工油紙傘</h3>
                        <span class="tag">獨一無二</span>
                            <span>NT$ 999</span>
                            <span>合計$ 999</span>
                        <div class="amount">
                            <span>數量：</span>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <div class="button">
                            <router-link to="/checkout_self-prod">
                                <button class="btn">
                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 2.6061V18.2427C25 18.9594 24.7552 19.5729 24.2656 20.0833C23.776 20.5937 23.1875 20.8488 22.5 20.8488H2.5C1.8125 20.8488 1.22396 20.5937 0.734375 20.0833C0.244792 19.5729 0 18.9594 0 18.2427V2.6061C0 1.88943 0.244792 1.27591 0.734375 0.765543C1.22396 0.255181 1.8125 0 2.5 0H22.5C23.1875 0 23.776 0.255181 24.2656 0.765543C24.7552 1.27591 25 1.88943 25 2.6061ZM2.5 5.21221H22.5V2.6061H2.5V5.21221ZM2.5 10.4244V18.2427H22.5V10.4244H2.5Z" fill="white"/>
                                        </svg>
                                    直接購買
                                </button>
                            </router-link>
                            <router-link to="/product">
                                <button class="btn">取消</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </section>
</template>

<script>
    export default{
        data() {
            return {
                currentStep : 1
                
            }
        },
        mounted() {

        },
    }
</script>
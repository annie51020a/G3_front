<template>
    <section class="quiz">
        <!-- 起始動畫 -->
        <div class="quiz-ani-start">
            <div class="umbrella-ani">
                <!-- 移除img標籤 -->
                <div class="umbrella-ani-img"></div>

                <!-- 遊戲規則 -->
                <div class="quiz-rule">
                    <div class="frame-start">
                        <div class="rule-text">
                            <h3>油紙傘知識小學堂</h3>
                            <p>遊戲規則<br />題目一共五題，考驗油紙傘小知識<br />答對三題以上即可獲得優惠券</p>
                            <button @click="startQuiz()">開始遊戲</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 背景 -->
            <div class="quiz-bac">
                <!-- 雲 -->
                <div class="cloud">
                    <div class="cloud-left">
                        <div class="cloud1"></div>
                        <div class="cloud2"></div>
                        <div class="cloud3"></div>
                    </div>
                    <div class="cloud-right">
                        <div class="cloud4"></div>
                        <div class="cloud5"></div>
                    </div>
                </div>
                <!-- 花瓣 -->
                <div class="flower">
                    <div class="flower-left">
                        <div class="flower1"></div>
                        <div class="flower2"></div>
                        <div class="flower3"></div>
                        <div class="flower4"></div>
                        <div class="flower2"></div>
                    </div>

                    <div class="flower-right">
                        <div class="flower1"></div>
                        <div class="flower2"></div>
                        <div class="flower3"></div>
                        <div class="flower4"></div>
                        <div class="flower2"></div>
                    </div>
                </div>
                <!-- 小孩 -->
                <div class="kid"></div>
            </div>
        </div>

        <!-- 題目內容 -->
    </section>
</template>


<script>
import gsap from "gsap";
export default {
    mounted() {
        const umbrellaAni = document.querySelector('.umbrella-ani')
        const quizRule = document.querySelector('.quiz-rule')
        const umbrellaAniImg = document.querySelector('.umbrella-ani-img')
        const ruleText = document.querySelector('.rule-text')

        setTimeout(() => {
            umbrellaAni.style.animation = 'none'
            umbrellaAniImg.style.display = 'none'
            quizRule.style.width = '80vw'
            ruleText.style.width = '90%'
        }, 2000)
        setTimeout(() => {
            ruleText.style.display = 'flex'
            ruleText.style.flexDirection = 'column'
            ruleText.style.justifyContent = 'center'
        }, 3600)


        gsap.to(".cloud1", {
            duration: 3,
            y: "+=7",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        gsap.to(".cloud2", {
            duration: 3,
            y: "-=7",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(".cloud3", {
            duration: 3,
            y: "+=7",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(".cloud4", {
            duration: 3,
            y: "+=7",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(".cloud5", {
            duration: 3,
            y: "-=7",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(".kid", {
            duration: 3,
            y: "-=5",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

    },
    methods: {
        startQuiz() {
            //開始遊戲:把前面的框關掉 顯示背景
            const quizBac = document.querySelector('.quiz-bac')
            const quizRule = document.querySelector('.quiz-rule')
            const ruleText = document.querySelector('.rule-text')
            const umbrellaAni = document.querySelector('.umbrella-ani')


            setTimeout(() => {
                quizRule.style.width = '.5vw'
                ruleText.style.display = 'none'
            }, 100)

            setTimeout(() => {
                quizRule.style.display = 'none'
                quizBac.style.display = 'flex'
                umbrellaAni.style.display = 'none'
            }, 1800)
        }
    }
}
</script>

<style lang="scss">
.quiz {
    width: 100%;

    .quiz-ani-start {
        width: 100%;
        height: 40vw;
        overflow: hidden;
        margin: 2% 0;

        .umbrella-ani-img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/pic/quiz/umbrella-ani.png');
            background-size: cover;
            background-repeat: no-repeat;
        }

        .umbrella-ani {
            //雨傘旋轉
            position: relative;
            width: 40vw;
            height: 40vw;
            border-radius: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            margin: auto;
            animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .quiz-rule {
            //遊戲規則
            position: relative;
            width: 0;
            height: 100%;
            background-color: #e4c7a0;
            transition: width 2s;
            z-index: 1;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 20px;
            display: flex;
            align-items: center;

            .frame-start {
                width: 0px;
                background-color: white;
                border-radius: 20px;
                width: 90%;
                height: 90%;
                margin: auto;
                text-align: center;
                display: flex;
                align-items: center;

                .rule-text {
                    display: none;
                    border-radius: 20px;
                    width: 90%;
                    height: 90%;
                    margin: auto;
                    text-align: center;
                    animation: fadeInFromTop 1s ease forwards;

                    >h3 {
                        color: #515a6e;
                        margin: 5%;
                    }

                    >p {
                        color: #ff4d00;
                    }

                    >button {
                        background-color: #be1a0e;
                        border-radius: 20px;
                        color: white;
                        font-size: 20px;
                        width: 140px;
                        height: 50px;
                        margin: 5% auto;
                        border: none;

                        &:hover {
                            background-color: white;
                            color: #be1a0e;
                            border: 1px solid #be1a0e;
                            transition: 0.3s;
                        }
                    }

                    @keyframes fadeInFromTop {

                        //往下淡入動畫
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                            /* 向上移動 50px */
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                            /* 恢復原位置 */
                        }
                    }
                }
            }
        }
    }

    .quiz-bac {
        width: 100%;
        height: 100%;
        flex-direction: column;

        .cloud {
            width: 100%;
            height: 40%;
            display: flex;

            .cloud-left {
                width: 50%;
                display: flex;

                .cloud1 {
                    width: 40%;
                    height: 100%;
                    margin: -2% 0 0 0;
                    background-image: url('@/assets/pic/quiz/cloud1.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                .cloud2 {
                    width: 30%;
                    height: 100%;
                    margin: 10% 0 0 -15%;
                    background-image: url('@/assets/pic/quiz/cloud2.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                .cloud3 {
                    width: 30%;
                    height: 100%;
                    margin: 0 -15% 0 -15%;
                    background-image: url('@/assets/pic/quiz/cloud3.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            }

            .cloud-right {
                width: 50%;
                display: flex;
                justify-content: end;

                .cloud4 {
                    width: 40%;
                    height: 100%;
                    margin: 0 -10%;
                    background-image: url('@/assets/pic/quiz/cloud4.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                .cloud5 {
                    width: 30%;
                    height: 100%;
                    margin: 0 10% 0 0;
                    background-image: url('@/assets/pic/quiz/cloud5.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            }
        }

        .flower {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2%;

            @keyframes flowerAni {
                0% {
                    transform: translateY(0%);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100%);
                    opacity: 0;
                }
            }

            .flower-left {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                background-repeat: repeat-y;

                > .flower1 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower2 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower2.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower3 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower3.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower4 {
                    width: 5%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower4.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }

            .flower-right {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                background-repeat: repeat-y;


                > .flower1 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower2 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower2.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower3 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower3.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                > .flower4 {
                    width: 5%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower4.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
        }

        .kid {
            width: 10%;
            height: 20%;
            margin: 0 0 0 25%;
            background-image: url('@/assets/pic/quiz/kid.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>

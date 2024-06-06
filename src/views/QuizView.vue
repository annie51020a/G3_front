<!-- 上次寫到37跟217行
    1.如何接到下一題
    2.要把result放到components
    3.修正動畫關掉遊戲規則的中間空白
    4.新增跳回答正確的動畫 文字淡入 框框要怎麼呈現?
-->
<template>
    <section class="quiz">
        <!-- 起始動畫 -->
        <div class="quiz-ani-start">
            <div class="umbrella-ani">
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

            <!-- 題目內容 -->
            <div class="quiz-box">
                <div class="quiz-content">
                    <div class="quiz-question">
                        <h4>1.油紙傘起源於哪個朝代</h4>
                    </div>
                    <div class="quiz-answer">
                        <div v-for="(answer, index) in answers" :key="index" @click="selectAns(answer)"
                            :class="[answer.className]">
                            <p>{{ answer.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 回答結果視窗 -->
            <div class="result-frame" v-if="selectedExplain">
                <div class="result-box">
                    <div class="result-text">
                        <img v-if="inCorrect === true" src="@/assets/pic/quiz/correct.png" alt="">
                        <img v-else src="@/assets/pic/quiz/wrong.png" alt="">
                        <h3>{{ inCorrect ? "回答正確" : "回答錯誤" }}</h3>
                    </div>
                    <div class="result-explain">
                        {{ selectedExplain }}
                    </div>
                    <button @click="nextQuestion()" class="next-question"><p>下一題</p></button>
                </div>
            </div>

            <!-- 總分未達/優惠券視窗 -->


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



    </section>
</template>


<script>
import gsap from "gsap";
export default {
    data() {
        return {
            answers: [
                { text: "宋  朝", className: "answer-a", boolean: "0", explain: "油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。" },
                { text: "漢  朝", className: "answer-b", boolean: "1", explain: "油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。" },
                { text: "元  朝", className: "answer-c", boolean: "0", explain: "油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。" },
                { text: "明  朝", className: "answer-d", boolean: "0", explain: "油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。" }
            ],
            selectedExplain: '',//儲存答案解釋
            inCorrect: false
        }
    },
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
            y: "-=9",
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
            const quizBox = document.querySelector('.quiz-box')


            setTimeout(() => {
                quizRule.style.width = '.5vw'
                ruleText.style.display = 'none'
            }, 100)

            setTimeout(() => {
                quizRule.style.display = 'none'
                quizBac.style.display = 'flex'
                umbrellaAni.style.display = 'none'
                quizBox.style.display = 'block'
            }, 1800)
        },
        selectAns(answer) {
            const quizBox = document.querySelector('.quiz-box')
            quizBox.style.display = 'none'

            if (answer.boolean === "0") {
                this.inCorrect = false
            }
            else if (answer.boolean === "1") {
                this.inCorrect = true
            }
            this.selectedExplain = answer.explain;//更新解答
        },
        nextQuestion(){
            const quizBox = document.querySelector('.quiz-box')
            const resultFrame = document.querySelector('.result-frame')
            const kid = document.querySelector('.kid')

            quizBox.style.display = 'block'
            resultFrame.style.display = 'none'
            kid.style.animation = 'kidMove 2s forwards'
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
        position: relative;


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

            .umbrella-ani-img {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/pic/quiz/umbrella-ani.png');
                background-size: cover;
                background-repeat: no-repeat;
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

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .quiz-box {
            width: 100%;
            display: none;
            position: absolute;
            top: 30%;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 5;

            .quiz-content {
                text-align: center;
                display: flex;
                flex-direction: column;

                h4 {
                    color: #847164;
                }

                .quiz-answer {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    margin: auto;

                    .answer-a,
                    .answer-b,
                    .answer-c,
                    .answer-d {
                        width: 100px;
                        height: 70px;
                        background-image: url('@/assets/pic/quiz/answer-pic.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                        margin: 8% 5%;
                        display: flex;
                        justify-content: center;
                        align-items: end;
                        text-align: center;
                        rotate: 14deg;

                        >p {
                            font-size: 16px;
                            rotate: -14deg;
                            padding-bottom: 7%;
                            color: #847164;
                        }

                        &:hover {
                            background-image: url('@/assets/pic/quiz/answer-pic-hover.png');
                            rotate: -14deg;
                            transition: 1s;

                            >p {
                                rotate: 14deg;
                            }
                        }
                    }
                }
            }
        }

        .result-frame {
            display: flex;
            flex-direction: column;
            width: 65vw;
            height: 70%;
            overflow: hidden;
            margin: auto;
            background-color: #e4c7a0;
            border-radius: 20px;
            position: absolute;
            top:10%;
            left: 18%;
            z-index: 6;

            .result-box{
                width: 90%;
                height: 90%;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                margin: auto;
                background-color: white;

                .next-question{
                    background-color: #be1a0e;
                    width: 140px;
                    height: 50px;
                    margin: 5% auto;
                    border: none;
                    border-radius: 20px;

                    > p{
                        font-size: 20px;
                        color: white;
                    }
                    &:hover {
                        background-color: white;
                        color: #be1a0e;
                        border: 1px solid #be1a0e;
                        transition: 0.3s;
                        > p {
                            color: #be1a0e;
                        }
                    }
                }

                .result-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 1% 0;
                    gap: 3%;
                    > h3 {
                        color: #515A6E;
                    }
                    > img {
                        width: 15%;
                    }
                }
                .result-explain{
                    width: 60%;
                    color: #FF4D00;
                    margin: 1% auto;
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

                >.flower1 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower2 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower2.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower3 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower3.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower4 {
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


                >.flower1 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower2 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower2.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower3 {
                    width: 30%;
                    height: 40%;
                    animation: flowerAni 5s linear infinite;
                    background-image: url('@/assets/pic/quiz/flower3.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                >.flower4 {
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
            height: 25%;
            margin: 0 0 0 25%;
            background-image: url('@/assets/pic/quiz/kid.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            @keyframes kidMove {//小孩右移動畫
                100%{
                    transform: translateX(60%);
                }
            }
        }
    }
}
</style>

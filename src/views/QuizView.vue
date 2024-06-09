<!-- 
    1.如何接到下一題==>放五個quiz-box
    2.要把result放到components
    3.新增跳回答正確的動畫 文字淡入 框框要怎麼呈現?
-->
<template>
    <section class="quiz">
        <!-- 起始動畫 -->
        <div class="quiz-ani-start">
            <div class="umbrella-ani">
                <!-- 旋轉傘動畫 -->
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
                        <h4>{{ selectQuestionArray[currentQuestionIndex].question_text }}</h4>
                    </div>
                    <div class="quiz-answer">
                        <!-- 把陣列中的答案渲染進answerKey中，@click選到的answer是question_option_a/b/c/d其中一個 -->
                        <div v-for="answerKey in ['question_option_a', 'question_option_b', 'question_option_c', 'question_option_d']"
                            :key="answerKey" @click="selectAnswer(answerKey)" class="question-option">
                            <p>{{ selectQuestionArray[currentQuestionIndex][answerKey] }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 回答結果視窗 -->
            <div class="result-frame" v-if="answerExplanation">
                <div class="result-box">
                    <div class="result-text">
                        <img v-if="isCorrect" src="@/assets/pic/quiz/correct.png" alt="">
                        <img v-else src="@/assets/pic/quiz/wrong.png" alt="">
                        <h3>{{ isCorrect ? "回答正確" : "回答錯誤" }}</h3>
                    </div>
                    <!-- 顯示解釋 -->
                    <div class="result-explain">
                        {{ answerExplanation }}
                    </div>
                    <button @click="nextQuestion()" class="next-question">
                        <p>下一題</p>
                    </button>
                </div>
            </div>

            <!-- 優惠券視窗 -->
            <div class="discount-frame">
                <div class="discount-box">
                    <div class="discount-text">
                        <h3>恭喜獲得優惠券</h3>
                    </div>

                    <div class="discount-img">
                        <img src="@/assets/pic/quiz/discount.png" alt="">
                    </div>

                    <div class="button-box">
                        <button @click="resetSettings()" class="play-again">
                            <p>再玩一次</p>
                        </button>

                        <router-link to="/product" class="link-to-product">
                            <p>去逛逛</p>
                        </router-link>
                    </div>

                </div>
            </div>

            <!-- 總分未達視窗 -->
            <div class="failed-frame">
                <div class="failed-box">
                    <div class="failed-text">
                        <h3>菜就多練，玩不起就別玩</h3>
                        <p>再給你一次機會</p>
                    </div>

                    <button @click="resetSettings()" class="play-again">
                        <p>再玩一次</p>
                    </button>

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
                <!-- 樹 -->
                <div class="tree-left"></div>
                <div class="tree-right"></div>
                <!-- 小孩 -->
                <div class="kid" :style="{ left: currentKidPosition - 7 + 'vw' }">
                    <img src="@/assets/pic/quiz/kid.png" alt="">
                </div>
            </div>
        </div>



    </section>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            //問題列表
            questions: [{
                //第一題
                question_id: 1,
                question_text: '油紙傘起源於哪個朝代',
                question_option_a: '宋  朝',
                question_option_b: '漢  朝',
                question_option_c: '元  朝',
                question_option_d: '明  朝',
                question_correctanswer: '漢  朝',
                question_answer_illustrate: '油紙傘的歷史可追溯到中國的漢朝，已有超過兩千年的悠久歷史。最早，它被用作宮廷貴族的雨具和禮儀器具，象徵著身份和地位。',
            },
            {
                //第二題
                question_id: 2,
                question_text: '明清時期，油紙傘不是以下哪種',
                question_option_a: '實  用  工  具',
                question_option_b: '文  化  象  徵',
                question_option_c: '娛  樂  工  具',
                question_option_d: '藝  術  象  徵',
                question_correctanswer: '娛  樂  工  具',
                question_answer_illustrate: '明清時期，油紙傘不僅是實用工具，更是文化和藝術的象徵，文人雅士常以詩詞歌賦歌頌其美。',
            },
            {
                //第三題
                question_id: 3,
                question_text: '油紙傘的傘骨通常是何種材質',
                question_option_a: '竹  子',
                question_option_b: '木  頭',
                question_option_c: '金  屬',
                question_option_d: '油  紙',
                question_correctanswer: '竹  子',
                question_answer_illustrate: '油紙傘以其獨特的材料和製作工藝著稱。傘骨通常由韌性強的竹子製成，輕巧而堅固。',
            },
            {
                //第四題
                question_id: 4,
                question_text: '油紙傘的傘面通常是何種材質',
                question_option_a: '宣  紙',
                question_option_b: '文  紙',
                question_option_c: '白  紙',
                question_option_d: '油  紙',
                question_correctanswer: '宣  紙',
                question_answer_illustrate: '傘面選用高質量的宣紙或綢緞，紙上塗抹防水性能優異的桐油，使其具有良好的防水功能。',
            },
            {
                //第五題
                question_id: 5,
                question_text: '現代油紙傘不應用於何處',
                question_option_a: '時  尚  設  計',
                question_option_b: '家  居  裝  飾',
                question_option_c: '舞  台  藝  術',
                question_option_d: '聚  眾  鬥  毆',
                question_correctanswer: '聚  眾  鬥  毆',
                question_answer_illustrate: '許多設計師將油紙傘元素融入時尚設計、家居裝飾和舞台藝術中，賦予其新的生命力。油紙傘被廣泛應用在各旅遊景點，成為展示當地文化特色的重要媒介。',
            },
            {
                //第六題
                question_id: 6,
                question_text: '我們的品牌名稱是',
                question_option_a: '傘  韻',
                question_option_b: '雨  傘  蜥  蜴',
                question_option_c: '傘  傘',
                question_option_d: '傘  漫',
                question_correctanswer: '傘  韻',
                question_answer_illustrate: '“傘韻”品牌的名稱源自於對傳統油紙傘文化的深刻理解和熱愛。"傘"直接表達了產品的核心，而"韻"則體現出這種傳統工藝所蘊含的優雅和美感。',
            },
            {
                //第七題
                question_id: 7,
                question_text: '我們品牌的目的是什麼',
                question_option_a: '賺  錢',
                question_option_b: '拿  到  補  助',
                question_option_c: '無  聊',
                question_option_d: '振  興  傳  統',
                question_correctanswer: '振  興  傳  統',
                question_answer_illustrate: '"傘韻"的誕生是為了復興這一傳統工藝，讓其在現代社會中重新煥發光彩。我們的目標是將這種古老的工藝帶入現代生活，讓更多人了解並欣賞油紙傘的美麗和實用性。',
            },
            {
                //第八題
                question_id: 8,
                question_text: '我們創立品牌的靈感來源於',
                question_option_a: '油  紙  傘  村',
                question_option_b: '美  術  展  覽',
                question_option_c: '創  作  影  片',
                question_option_d: '政  府  消  息',
                question_correctanswer: '油  紙  傘  村',
                question_answer_illustrate: '"傘韻"品牌的創立源於一次偶然的文化探索之旅。創始人在拜訪一個古老的油紙傘製作村時，被那裡工匠們精湛的技藝和傳統文化深深打動。',
            },
            {
                //第九題
                question_id: 9,
                question_text: '我們創立品牌的宗旨是',
                question_option_a: '賺  錢',
                question_option_b: '傳  承',
                question_option_c: '拿  到  補  助',
                question_option_d: '船  沉',
                question_correctanswer: '傳  承',
                question_answer_illustrate: '"傘韻"的品牌宗旨是傳承與創新，融合傳統工藝與現代設計，為用戶提供既實用又富有文化價值的油紙傘。',
            },
            {
                //第十題
                question_id: 10,
                question_text: '我們品牌有自信的部分不是以下何種',
                question_option_a: '材  料',
                question_option_b: '工  藝',
                question_option_c: '花  俏',
                question_option_d: '耐  用',
                question_correctanswer: '花  俏',
                question_answer_illustrate: '我們致力於使用最優質的材料和最精湛的工藝，確保每一把“傘韻”油紙傘都能經受住時間的考驗，成為用戶長久陪伴的良伴。',
            },

            ],
            //選擇題目的存放陣列
            selectQuestionArray: [],
            //現在在第幾題
            currentQuestionIndex: 0,
            // 選擇的答案一開始為null
            selectedAnswer: null,
            // 答對的題數
            correctAnswers: 0,
            //顯示解釋 
            answerExplanation: null,
            //是否回答正確
            isCorrect: false,
            // 現在小孩移動的距離
            currentKidPosition: 0,
        }
    },
    created() {
        //在頁面loding時隨機選五題的函數
        this.selectRandomQuestions();
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
        //隨機抓五題的函式
        selectRandomQuestions() {
            for (let i = 0; i < 5; i++) {
                // 在1~10題中選出一題
                const randomIndex = Math.floor(Math.random() * this.questions.length);
                //用index去抓資料存到變數中
                const randomQuestion = this.questions[randomIndex];
                // 把變數randomQuestion推進data中的空陣列selectQuestionArray
                this.selectQuestionArray.push(randomQuestion);
                // 用splice()移除已經被選過的問題
                this.questions.splice(randomIndex, 1);
            }
        },
        // 選擇答案的函式
        selectAnswer(answerKey) {
            // 存入選擇答案
            this.selectedAnswer = answerKey;
            // 抓正確答案
            const correctAnswer = this.selectQuestionArray[this.currentQuestionIndex].question_correctanswer;
            // 把option中的字串抓出來
            const selectOption = this.selectQuestionArray[this.currentQuestionIndex][answerKey];

            // 判斷答案是否一致
            this.isCorrect = (selectOption === correctAnswer);

            if (selectOption === correctAnswer) {
                // 答對題數+1
                this.correctAnswers++;
            }
            // 抓解釋資料
            this.answerExplanation = this.selectQuestionArray[this.currentQuestionIndex].question_answer_illustrate;

            // show結果
            this.showResultFrame();
            // 如果所選的答案為現在題目的正確答案


        },
        startQuiz() {
            //開始遊戲:把前面的框關掉 顯示背景
            const quizBac = document.querySelector('.quiz-bac')
            const quizRule = document.querySelector('.quiz-rule')
            const ruleText = document.querySelector('.rule-text')
            const umbrellaAni = document.querySelector('.umbrella-ani')
            const quizBox = document.querySelector('.quiz-box')
            const frameStart = document.querySelector('.frame-start')

            setTimeout(() => {
                quizRule.style.width = '.5vw'
                ruleText.style.display = 'none'
            }, 100)

            setTimeout(() => {
                frameStart.style.display = 'none'
            }, 1900)

            setTimeout(() => {
                quizRule.style.display = 'none'
                quizBac.style.display = 'flex'
                umbrellaAni.style.display = 'none'
                quizBox.style.display = 'block'
            }, 2000)
        },
        nextQuestion() {
            // 重置解釋
            this.answerExplanation = null;
            // 重置已選答案
            this.selectedAnswer = null;
            // 下一題
            this.currentQuestionIndex++;

            const quizBox = document.querySelector('.quiz-box');
            const resultFrame = document.querySelector('.result-frame')
            const kid = document.querySelector('.kid')

            quizBox.style.display = 'block';
            resultFrame.style.display = 'none';

            gsap.to(kid, {
                duration: 2,
                x: this.currentKidPosition += 10,
            });

            // 如果答完五題
            if (this.currentQuestionIndex === this.selectQuestionArray.length && this.correctAnswers >= 3) {
                // 顯示優惠券
                this.showDiscountFrame();

            }
            else if (this.currentQuestionIndex === this.selectQuestionArray.length && this.correctAnswers < 3) {
                // 顯示不及格跟再玩一次
                this.showFailedFrame();
            }
        },
        // show答題結果視窗
        showResultFrame() {
            const resultFrame = document.querySelector('.result-frame');

            resultFrame.style.display = 'block';
        },
        // show優惠券視窗
        showDiscountFrame() {
            const discountFrame = document.querySelector('.discount-frame');

            discountFrame.style.display = 'flex';
        },
        //show不及格視窗
        showFailedFrame() {
            const failedFrame = document.querySelector('.failed-frame');

            failedFrame.style.display = 'flex';
        },

        // 重設所有設定
        resetSettings() {
            window.location.reload();
        },
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

                    .question-option {
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
            top: 10%;
            left: 18%;
            z-index: 6;

            .result-box {
                width: 90%;
                height: 90%;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                margin: auto;
                background-color: white;

                .next-question {
                    background-color: #be1a0e;
                    width: 140px;
                    height: 50px;
                    margin: 5% auto;
                    border: none;
                    border-radius: 20px;

                    >p {
                        font-size: 20px;
                        color: white;
                    }

                    &:hover {
                        background-color: white;
                        color: #be1a0e;
                        border: 1px solid #be1a0e;
                        transition: 0.3s;

                        >p {
                            color: #be1a0e;
                        }
                    }
                }

                .result-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2% 0;
                    gap: 3%;

                    >h3 {
                        color: #515A6E;
                    }

                    >img {
                        width: 15%;
                    }
                }

                .result-explain {
                    width: 60%;
                    color: #FF4D00;
                    margin: 1% auto;
                }
            }
        }

        .discount-frame {
            display: none;
            flex-direction: column;
            width: 65vw;
            height: 70%;
            overflow: hidden;
            margin: auto;
            background-color: #e4c7a0;
            border-radius: 20px;
            position: absolute;
            top: 10%;
            left: 18%;
            z-index: 8;

            .discount-box {
                display: none;
                width: 90%;
                height: 90%;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                margin: auto;
                background-color: white;

                .discount-img {
                    margin: auto;
                    display: flex;
                    justify-content: center;

                    >img {
                        width: 60%;
                    }
                }

                .discount-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2% 0;
                    gap: 3%;

                    >h3 {
                        color: #515A6E;
                    }
                }

                .button-box {
                    display: flex;
                    .link-to-product {
                        background-color: #be1a0e;
                        width: 140px;
                        height: 50px;
                        margin: 5% auto;
                        border: none;
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        >p {
                            font-size: 20px;
                            color: white;
                            text-align: center;
                        }

                        &:hover {
                            background-color: white;
                            color: #be1a0e;
                            border: 1px solid #be1a0e;
                            transition: 0.3s;

                            >p {
                                color: #be1a0e;
                            }
                        }
                    }

                    .play-again {
                        background-color: #E7BD86;
                        width: 140px;
                        height: 50px;
                        margin: 5% auto;
                        border: none;
                        border-radius: 20px;

                        >p {
                            font-size: 20px;
                            color: white;
                        }

                        &:hover {
                            background-color: white;
                            color: #E7BD86;
                            border: 1px solid #E7BD86;
                            transition: 0.3s;

                            >p {
                                color: #E7BD86;
                            }
                        }
                    }
                }

            }
        }

        .failed-frame {
            display: none;
            flex-direction: column;
            width: 65vw;
            height: 70%;
            overflow: hidden;
            margin: auto;
            background-color: #e4c7a0;
            border-radius: 20px;
            position: absolute;
            top: 10%;
            left: 18%;
            z-index: 6;

            .failed-box {
                width: 90%;
                height: 90%;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                margin: auto;
                background-color: white;

                .failed-text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: auto;

                    >h3 {
                        color: #515A6E;
                        margin-bottom: 50px;
                    }
                }

                .play-again {
                    background-color: #E7BD86;
                    width: 140px;
                    height: 50px;
                    margin: 5% auto;
                    border: none;
                    border-radius: 20px;

                    >p {
                        font-size: 20px;
                        color: white;
                    }

                    &:hover {
                        background-color: white;
                        color: #E7BD86;
                        border: 1px solid #E7BD86;
                        transition: 0.3s;

                        >p {
                            color: #E7BD86;
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
        position: relative;

        .cloud {
            width: 100%;
            height: 40%;
            display: flex;

            .cloud-left {
                width: 50%;
                display: flex;

                .cloud1 {
                    width: 30%;
                    height: 100%;
                    margin: -3% 0 0 0;
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
                    width: 30%;
                    height: 100%;
                    margin: 2% -10%;
                    background-image: url('@/assets/pic/quiz/cloud4.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    transform: rotateY(180deg);
                }

                .cloud5 {
                    width: 30%;
                    height: 100%;
                    margin: 0 10% 0 0;
                    background-image: url('@/assets/pic/quiz/cloud5.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    transform: rotateY(180deg);
                }
            }
        }

        .tree-left {
            width: 20%;
            height: 70%;
            background-image: url('@/assets/pic/quiz/tree.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: contain;
            position: absolute;
            bottom: 5%;
            left: 0;
            transform: rotateY(180deg);
            z-index: -10;
        }

        .tree-right {
            width: 20%;
            height: 70%;
            background-image: url('@/assets/pic/quiz/tree.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: contain;
            position: absolute;
            bottom: 5%;
            right: 0;
            z-index: -10;
        }

        .kid {
            width: 10%;
            height: 25%;
            margin: 0 0 0 25%;
            position: relative;
            transition: 2s;

            >img {
                position: absolute;
                right: -5vw;
                top: 150%;
                width: 7vw;
            }
        }
    }
}
</style>

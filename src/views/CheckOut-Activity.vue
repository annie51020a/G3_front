<template>
    <div class="go-back">
        <router-link to="/activity/:id">
            <返回活動詳情頁 </router-link>
    </div>
    <div class="checkout-container">
        <div class="confirm-info">
            <div class="confirm-title">
                <span>確認訂購人資料</span>
                <!-- <button><i class="fa-solid fa-chevron-down"></i></button> -->
            </div>
            <div class="disc-line"></div>

            <div class="ord-info">
                <form>
                    <div class="form-group">
                        <label for="name">姓名:</label>
                        <input type="text" id="name">
                    </div>
                    <div class="form-group">
                        <label for="phone">聯繫電話：</label>
                        <input type="text" id="phone">
                    </div>
                    <div class="form-group">
                        <label for="email">電子郵箱：</label>
                        <input type="email" id="email">
                    </div>
                </form>
            </div>
        </div>
        <div class="confirm-ord">
            <div class="confirm-ord-title">
                <span>確認訂單資料</span>
            </div>
            <div class="disc-line"></div>

            <div class="act-info">
                <!-- <button><i class="fa-solid fa-chevron-down"></i></button> -->
                <img class="act-img" src="../assets/pic/act-teaching1.jpg" alt="教學活動1">
                <div class="act-detail">
                    <div class="act-location">
                        <h5>油紙傘手工教室</h5>
                        <span>地點：傘韻手工教室204</span><br>
                        <span>活動時間：2024.05.20(一) 17:00~19:00</span><br>
                        <div class="mention">*只需填寫一位參與者資料作為代表即可</div>
                    </div>
                    <div class="act-people">
                        人數：<span>1/人</span>
                    </div>
                    <div class="act-amount">
                        總計：NT$<span>300</span>
                    </div>
                </div>
            </div>
            <div class="disc-line"></div>
            <div class="join-info">
                <span class="join-person">參與者資料</span>
                <input type="checkbox"><span>同訂購人資料</span>
            </div>
            <form>
                <div class="form-group">
                    <label for="name">姓名:</label>
                    <input type="text" id="name">
                </div>
                <div class="form-group">
                    <label for="phone">聯繫電話：</label>
                    <input type="text" id="phone">
                </div>
                <div class="form-group">
                    <label for="email">電子郵箱：</label>
                    <input type="email" id="email">
                </div>
                <div class="form-group">
                    <label for="text">特殊需求備註：</label>
                    <!-- 特殊需求備註要改text格式 -->
                    <textarea id="memo" v-model="memo" maxlength="500" class="large-textarea"></textarea>

                </div>
            </form>
        </div>
        <div class="pay-way">
            <div class="payment-title">
                <span>付款方式</span>
            </div>
            <div class="disc-line"></div>

            <div class="payment-info">
                <form>
                    <div class="form-group">
                        <input type="radio" id="credit-card" name="payment" checked>
                        <label for="credit-card">信用卡支付</label>
                    </div>
                    <div class="form-group">
                        <label for="card-number">信用卡號碼：</label>
                        <input type="text" id="card-number" class="card-input" maxlength="4">
                        <span>-</span>
                        <input type="text" class="card-input" maxlength="4">
                        <span>-</span>
                        <input type="text" class="card-input" maxlength="4">
                        <span>-</span>
                        <input type="text" class="card-input" maxlength="4">
                    </div>
                    <div class="form-group">
                        <label for="expiry-date">有效日期：</label>
                        <input type="text" id="expiry-date-mm" placeholder="MM" maxlength="2">
                        <span>/</span>
                        <input type="text" id="expiry-date-yy" placeholder="YY" maxlength="2">
                        <input type="text" id="cvc" placeholder="信用卡背面的三碼" maxlength="3">
                    </div>
                    <div class="form-group">
                        <div class="save-card-use">
                            <input type="checkbox" id="save-card-cb">
                            <label for="save-card">設定為常用信用卡</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="use-coupon">是否使用優惠券：</label>
                        <input type="checkbox" id="use-coupon" class="switch">
                    </div>
                </form>
            </div>
        </div>
        <div class="invoice">
            <div class="invoice-item">
                <div class="item-description">
                    <p>油紙傘手工教室</p>
                    <p>人數：1人</p>
                    <p>NT$300(元)</p>
                </div>
                <div class="item-multiplier">
                    <p>x</p>
                </div>
                <div class="item-discount">
                    <p>優惠折扣(8折)</p>
                    <p>優惠券號碼：CID101</p>
                    <p>80%</p>
                </div>

            </div>
            <div class="disc-line"></div>
            <div class="invoice-total">
                <p>總計：NT$240</p>
            </div>
        </div>
        <div class="confirm-checkout">
            <button>確認結帳</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    },
    mounted() { },
    methods: {
    }
}
</script>
<style scoped lang="scss">
.go-back {
    width: 90%;
    margin: 20px auto;

}

.checkout-container {
    width: 60%;
    margin: 50px auto;

    .confirm-info {
        border: 1px solid #828282;
        background: #ffffff;
        border-radius: 20px;
        height: 240px;

        .confirm-title {
            height: 48px;
            padding-left: 20px;
            display: flex;
            align-items: center;

            button {
                background-color: transparent;
                border: none;
            }
        }

        .disc-line {
            height: 1px;
            background-color: #828282;
        }

        .ord-info {
            height: 80%;
            display: flex;
            align-items: center;
            padding-left: 20px;

            form {
                display: flex;
                flex-direction: column;
                gap: 25px;
                width: 100%;

                .form-group {
                    display: flex;
                    align-items: flex-start;
                    margin: auto 0;

                    label {
                        flex-basis: 15%;
                        margin: auto 0;
                    }

                    input {
                        height: 20px;
                        flex-basis: 25%;
                    }
                }
            }
        }
    }

    .confirm-ord {
        border: 1px solid #828282;
        background: #ffffff;
        border-radius: 20px;
        margin: 40px 0;
        height: 565px;

        .confirm-ord-title {
            height: 48px; //高的問題要解決
            padding-left: 20px;
            display: flex;
            align-items: center;
        }

        .disc-line {
            height: 1px;
            background-color: #828282;
        }

        .act-info {
            display: flex;
            padding-left: 20px;
            height: 30%;

            button {
                background-color: transparent;
                border: none;
            }

            .act-img {
                height: 80%;
                width: 20%;
                object-fit: cover;
                border-radius: 20px;
                margin: auto 10px;

            }

            .act-detail {
                display: flex;
                margin: auto 0;
                width: 80%;
                justify-content: space-between;

                .act-location {
                    h5 {
                        padding-bottom: 10px;
                    }

                    span {
                        line-height: 150%;
                        font-size: 14px;
                    }

                    .mention {
                        font-size: 12px;
                        padding-top: 20px;
                    }

                }

                .act-people {
                    margin: auto;
                }

                .act-amount {
                    margin: auto;
                }

            }
        }

        .join-info {
            display: flex;
            margin: 20px 0;
            padding-left: 30px;
            align-items: center;

            .join-person {
                position: relative;
                margin-right: 80px;

                &::before {
                    content: "";
                    position: absolute;
                    height: 18px;
                    width: 2px;
                    background-color: rgba(190, 26, 14, 1);
                    left: -10px;
                    bottom: 0;
                    top: 0;
                }
            }

            input {
                margin: 0 10px 0 0;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            gap: 25px;
            width: 100%;
            padding-left: 20px;

            .form-group {
                display: flex;
                align-items: flex-start;
                margin: auto 0;

                label {
                    flex-basis: 18%;
                    margin: auto 0;
                }

                input {
                    height: 20px;
                    flex-basis: 25%;
                }
                .large-textarea {
                    height: 80px;
                    flex-basis: 25%;
                    resize: vertical;
                    /* 允許垂直調整大小 */

                }
            }
        }


    }

    .pay-way {
        border: 1px solid #828282;
        background: #ffffff;
        border-radius: 20px;
        height: 290px;

        .payment-title {
            height: 48px;
            padding-left: 20px;
            display: flex;
            align-items: center;
        }

        .disc-line {
            height: 1px;
            background-color: #828282;
        }

        .payment-info {
            height: 82%;
            display: flex;
            align-items: center;
            padding-left: 20px;

            form {
                display: flex;
                flex-direction: column;
                gap: 25px;
                width: 100%;
                margin: auto 0;

                .form-group {
                    display: flex;
                    align-items: flex-start;
                    margin: auto 0;

                    input[type="radio"] {
                        margin-right: 10px;
                        accent-color: #be1a0e;
                    }

                    label {
                        flex-basis: 20%;
                        margin: auto 0;
                    }

                    .card-input {
                        display: flex;
                        width: 30px;
                        flex-basis: 10%;
                    }

                    span {
                        display: inline-block;
                        padding: 0 3px;
                        margin: auto 0;
                    }

                    input[type="text"] {
                        height: 20px;
                    }

                    #expiry-date-mm {
                        display: flex;
                        width: 30px;
                        flex-basis: 10%;
                    }

                    #expiry-date-yy {
                        display: flex;
                        width: 30px;
                        flex-basis: 10%;
                    }

                    #cvc {
                        margin-left: 14px;
                        width: 50px;
                        flex-basis: 15%;
                    }

                    .save-card-use {
                        display: flex;
                        align-items: center;

                        input {
                            margin: 0px;
                        }

                        label {
                            flex-basis: 100%;
                            padding-left: 10px;
                        }
                    }

                    .switch {
                        appearance: none;
                        width: 40px;
                        height: 20px;
                        background: #ddd;
                        border-radius: 10px;
                        position: relative;
                        cursor: pointer;
                        outline: none;
                        transition: background 0.3s;

                        &:checked {
                            background: #4caf50;
                        }

                        &::before {
                            content: '';
                            position: absolute;
                            width: 18px;
                            height: 18px;
                            background: #fff;
                            border-radius: 50%;
                            top: 1px;
                            left: 1px;
                            transition: transform 0.3s;
                        }

                        &:checked::before {
                            transform: translateX(20px);
                        }
                    }
                }
            }
        }
    }

    .invoice {
        border: 1px solid #828282;
        background: #ffffff;
        border-radius: 20px;
        height: 240px;
        margin: 40px 0;

        .invoice-item {
            margin: auto 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 50px 0;


            .item-description,
            .item-discount,
            .item-multiplier {
                text-align: center;
            }

            .item-description p,
            .item-discount p,
            .item-multiplier p {
                margin: 5px 0;
            }

        }

        .disc-line {
            height: 1px;
            background-color: #828282;
        }

        .invoice-total {
            margin: auto 40px;
            text-align: right;
            padding: 20px 0;
            font-weight: 600;
        }

    }
    .confirm-checkout {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 80px 0;

        button {
            background-color: transparent;
            border: none;
            background: #be1a0e;
            border-radius: 20px;
            width: 130px;
            height: 50px;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
        }
    }




}
</style>
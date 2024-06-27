<template>
    <div class="go-back">
        <router-link to="/cart">
            <返回購物車 </router-link>
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

            <div class="prod-info">
                <CheckoutProd v-for="item in selectedItems" :key="item.id" :item="item" />
            </div>
            <div class="disc-line"></div>
            <div class="receiver-info">
                <span class="receiver">收件人資料</span>
                <input type="checkbox"><span>同訂購人資料</span>
            </div>
            <form>
                <div class="form-group">
                    <label for="name">收件人姓名:</label>
                    <input type="text" id="name">
                </div>
                <div class="form-group">
                    <label for="phone">收件人聯絡電話：</label>
                    <input type="text" id="phone">
                </div>
                <div class="form-group">
                    <label for="address">收件人地址：</label>
                    <select v-model="selectedCity" @change="onCityChange" class="select">
                        <option disabled value="">請選擇縣市</option>
                        <option v-for="city in uniqueCities" :key="city" :value="city">{{ city }}</option>
                    </select>

                    <select v-model="selectedDistrict" class="select" :disabled="!selectedCity">
                        <option disabled value="">請選擇鄉鎮區</option>
                        <option v-for="district in filteredDistricts" :key="district.name" :value="district.name">{{
                            district.name }}</option>
                    </select>

                    <input type="text" v-model="addressDetail" placeholder="請填寫詳細地址">
                </div>
                <div class="form-group">
                    <label for="email">收件人電子郵箱：</label>
                    <input type="email" id="email">
                </div>
                <div class="form-group">
                    <label for="prefer-time">偏好收貨時間：</label>
                    <select v-model="preferTime" @change="onTimeChange" class="select">
                        <option disabled value="">請選擇時間段</option>
                        <option v-for="time in times" :key="time.name" value="time.name">{{ time.name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="text">特殊需求備註：</label>
                    <!-- 特殊需求備註要改text格式 -->
                    <textarea id="memo" v-model="memo" maxlength="500" class="large-textarea"></textarea>
                </div>

            </form>
            <div class="disc-line-form"></div>
            <div class="invoicing-title">
                <span>發票與統編</span>
            </div>
            <form class="invoicing-form">
                <div class="form-group">
                    <label for="invoicing">載具編號：</label>
                    <input type="text" id="invoicing" maxlength="8">
                    <input type="checkbox" class="invoicing-cb"><span>設定為常用載具</span>
                </div>
                <div class="form-group">
                    <label for="compilation-title">統一編號：</label>
                    <input type="text" id="compilation" maxlength="8">
                    <input type="checkbox" class="invoicing-cb"><span>設定為常用統編</span>
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
                        <input type="text" id="card-number-1" ref="cardNumber1" class="card-input" maxlength="4"
                            @input="moveToNext($event, 'cardNumber2')">
                        <span>-</span>
                        <input type="text" id="card-number-2" ref="cardNumber2" class="card-input" maxlength="4"
                            @input="moveToNext($event, 'cardNumber3')">
                        <span>-</span>
                        <input type="text" id="card-number-3" ref="cardNumber3" class="card-input" maxlength="4"
                            @input="moveToNext($event, 'cardNumber4')">
                        <span>-</span>
                        <input type="text" id="card-number-4" ref="cardNumber4" class="card-input" maxlength="4">
                    </div>
                    <div class="form-group">
                        <label for="expiry-date">有效日期：</label>
                        <input type="text" id="expiry-date-mm" ref="expiryDate1" placeholder="MM" maxlength="2"
                            @input="moveToNext($event, 'expiryDate2')">
                        <span>/</span>
                        <input type="text" id="expiry-date-yy" ref="expiryDate2" placeholder="YY" maxlength="2"
                            @input="moveToNext($event, 'cvc')">
                        <input type="text" id="cvc" ref="cvc" placeholder="信用卡背面的三碼" maxlength="3">
                    </div>

                    <div class="form-group">
                        <div class="save-card-use">
                            <input type="checkbox" id="save-card-cb">
                            <label for="save-card">設定為常用信用卡</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="use-coupon">是否使用優惠券：</label>
                        <input type="checkbox" id="use-coupon" class="switch" v-model="useCoupon">
                        <!-- <span class="switch-alert">*無可使用之優惠券</span> -->
                    </div>
                </form>
            </div>
        </div>
        <div class="invoice" v-if="selectedItems.length">
            <div class="invoice-item">
                <div class="item-description">
                    <div class="item-total">
                        <p>{{ itemTypesCount }}件商品合計</p>
                        <p>NT${{ totalPrice }}(元)</p>
                    </div>
                    <div v-if="useCoupon" class="useCoupon">
                        <div class="item-multiplication">
                            x
                        </div>
                        <div class="item-discount">
                            <p>優惠折扣(8折)</p>
                        </div>
                    </div>
                </div>

                <div class="disc-line"></div>

                <div class="invoice-total">
                    <p>總計：NT${{ useCoupon ? discountedTotal : totalPrice }}(元)</p>
                </div>
            </div>
        </div>
        <div class="confirm-checkout">
            <button @click="submitOrder">確認結帳</button>
        </div>
        <SuccessModal :visible="showSuccessModal" message="結帳成功！" @close="closeModal" />
    </div>
</template>
<script>
import { useCartStore } from '../stores/cartStore.js'
import CheckoutProd from '../components/layout/CheckoutProd.vue'
import SuccessModal from '../components/layout/SuccessModal.vue';
export default {
    //     setup() {
    //     const cartStore = useCartStore()

    //     return {
    //       cartStore,
    //     }
    //   },
    components: { CheckoutProd, SuccessModal },
    setup() {
        const cartStore = useCartStore();

        return {
            cartStore,
            selectedItems: cartStore.selectedItems // 添加 selectedItems
        }
    },
    data() {

        return {
            cartStore: useCartStore(),
            selectedCity: '',
            selectedDistrict: '',
            addressDetail: '',
            preferTime: '',
            useCoupon: false,
            showSuccessModal: false,
            order: {
                name: '',
                phone: '',
                email: '',
                receiverName: '',
                receiverPhone: '',
                receiverEmail: '',
                invoiceNumber: '',
            },
            times: [
                { name: '無偏好' },
                { name: '上午(9:00~12:00)' },
                { name: '下午(13:00~18:00)' }
            ],
            cities: [],
            districts: []
        };
    },
    computed: {
        uniqueCities() {
            const cityNames = this.cities.map(city => city.city_name);
            return [...new Set(cityNames)];
        },
        filteredDistricts() {
            return this.cities.filter(city => city.city_name == this.selectedCity);
        },
        itemTypesCount() {
            return this.cartStore.selectedCartItems.length;
        },
        totalPrice() {
            return this.cartStore.selectedCartItems.reduce((acc, item) => acc + (item.count * item.price), 0);
        },
        discountedTotal() {
            return Math.round(this.totalPrice * 0.8);
        },
        selectedItems() {
            // 只返回選中的商品
            return this.cartStore.selectedCartItems;
        }
    },
    created() {
        this.fetchCities();
    },
    methods: {
        async fetchCities() {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}Taiwan_address_data.json`);
                if (!response.ok) {
                    throw new Error('網絡出現問題，請稍後再試');
                }
                this.cities = await response.json();
            } catch (error) {
                console.error('無法選取資料:', error);
            }
        },
        onCityChange() {
            this.selectDistrict = '';
        },
        onTimeChange() {
            console.Consolelog('Selected time:', this.preferTime);
        },
        submitOrder() {
            // 表单驗證
            // if (!this.order.name || !this.order.phone || !this.order.email || !this.order.receiverName || !this.order.receiverPhone || !this.order.receiverEmail || !this.addressDetail) {
            //     alert('請填寫並確認完成所有訂單資料');
            //     return;
            // }

            // 顯示成功彈窗
            this.showSuccessModal = true;

            // 清空購物車
            this.cartStore.cleanCart();
        },
        closeModal() {
            this.showSuccessModal = false;
            // 重定向到首頁
            this.$router.push('/');
        },
        moveToNext(event, nextFieldId) {
            if (event.target.value.length === event.target.maxLength) {
                setTimeout(() => {
                    this.$refs[nextFieldId].focus();
                }, 100);
            }
        }
    }
};
</script>
<style scoped lang="scss">
@import "@/assets/sass/style";

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



        .receiver-info {
            display: flex;
            margin: 20px 0;
            padding-left: 30px;
            align-items: center;

            .receiver {
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
            padding-left: 20px;

            .form-group {
                display: flex;
                align-items: flex-start;
                margin: auto 0;

                label {
                    flex-basis: 20%;
                    margin: auto 0;
                }

                input {
                    height: 20px;
                    flex-basis: 25%;
                }

                select {
                    height: 26px;
                    flex-basis: 15%;
                    margin-right: 10px;
                    background-color: rgba(249, 241, 229, 1);
                }

                .large-textarea {
                    height: 80px;
                    flex-basis: 25%;
                    resize: vertical;
                    /* 允許垂直調整大小 */

                }


            }

        }

        .disc-line-form {
            margin-top: 20px;
            height: 1px;
            background-color: #828282;
        }

        .invoicing-title {
            display: flex;
            margin: 20px 0;
            padding-left: 30px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                height: 18px;
                width: 2px;
                background-color: rgba(190, 26, 14, 1);
                left: 20px;
                bottom: 0;
                top: 0;
            }
        }

        .invoicing-form {
            display: flex;
            flex-direction: column;
            margin: 40px 0 20px 0;
            gap: 25px;
            padding-left: 20px;

            .form-group {
                display: flex;
                align-items: flex-start;
                margin: auto 0;

                label {
                    flex-basis: 20%;
                    margin: auto 0;
                }

                input {
                    height: 20px;
                    flex-basis: 0;

                }

                .invoicing-cb {
                    width: 13px;
                    height: 13px;
                    margin: auto 10px auto 30px;
                }

                span {
                    display: inline-block;
                    margin: auto 0;
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

                    .switch-alert {
                        color: #be1a0e;
                        font-size: 12px;
                        padding-left: 20px;
                    }
                }
            }
        }
    }

    .invoice {
        border: 1px solid #828282;
        background: #ffffff;
        border-radius: 20px;
        margin: 40px 0;

        .invoice-item {
            margin: auto;
            padding: 30px 0 10px 0;

            .item-description {
                text-align: center;
                display: flex;
                justify-content: center;
                margin-bottom: 20px;

                p {
                    margin: 5px 0;
                }

                .item-total {
                    margin: 0 10px;
                    width: 33.33%;
                }

                .useCoupon {
                    display: flex;
                    justify-content: space-around;
                    width: 66.66%;
                    margin: auto;

                    .item-multiplication {
                        margin: 0 10px;
                        width: 50%;
                    }

                    .item-discount {
                        margin: 0 10px;
                        width: 50%;
                    }
                }


            }




            .disc-line {
                height: 1px;
                background-color: #828282;
            }

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

@media screen and (min-width: $md) and (max-width: $xl) {
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
                            flex-basis: 25%;
                            margin: auto 0;
                            font-size: 14px;
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
            height: 945px;

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

            .prod-info {
                display: flex;
                padding-left: 20px;
                height: 30%;

                button {
                    background-color: transparent;
                    border: none;
                }

                .prod-img {
                    height: auto;
                    width: 20%;
                    object-fit: cover;
                    border-radius: 20px;
                    margin: auto 10px auto 0;

                }

                .prod-spec {
                    display: flex;
                    margin: auto 0;
                    width: 80%;
                    justify-content: space-between;

                    .prod-card {
                        h5 {
                            padding-bottom: 10px;
                        }

                        span {
                            line-height: 150%;
                            font-size: 14px;
                        }

                        .mention {
                            font-size: 12px;
                            padding-top: 50px;
                        }

                    }

                    .prod-count {
                        margin: auto;
                    }

                    .prod-sum {
                        margin: auto;
                    }

                }
            }

            .receiver-info {
                display: flex;
                margin: 20px 0;
                padding-left: 30px;
                align-items: center;

                .receiver {
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
                        flex-basis: 25%;
                        margin: auto 0;
                        font-size: 14px;
                    }

                    input {
                        height: 20px;
                        flex-basis: 25%;
                        font-size: 14px;
                    }

                    select {
                        height: 26px;
                        flex-basis: 10%;
                        margin-right: 10px;
                        background-color: rgba(249, 241, 229, 1);
                    }

                    .large-textarea {
                        height: 80px;
                        flex-basis: 25%;
                        resize: vertical;
                        /* 允許垂直調整大小 */

                    }


                }

            }

            .disc-line-form {
                margin-top: 20px;
                height: 1px;
                background-color: #828282;
            }

            .invoicing-title {
                display: flex;
                margin: 20px 0;
                padding-left: 30px;
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    height: 18px;
                    width: 2px;
                    background-color: rgba(190, 26, 14, 1);
                    left: 20px;
                    bottom: 0;
                    top: 0;
                }
            }

            .invoicing-form {
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
                        flex-basis: 25%;
                        margin: auto 0;
                        font-size: 14px;
                    }

                    input {
                        height: 20px;
                        flex-basis: 0;

                    }

                    .invoicing-cb {
                        width: 13px;
                        height: 13px;
                        margin: auto 10px auto 30px;
                    }

                    span {
                        display: inline-block;
                        margin: auto 0;
                        font-size: 14px;
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
                            flex-basis: 25%;
                            margin: auto 0;
                            font-size: 14px;
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
                            font-size: 14px;
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
                            flex-basis: 20%;

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

                        .switch-alert {
                            color: #be1a0e;
                            font-size: 12px;
                            padding-left: 20px;
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
}

@media screen and (max-width: $md) {
    .checkout-container {
        width: 90%;

        .confirm-info {
            border-radius: 10px;
            height: 240px;

            .confirm-title {
                height: 48px;
                font-size: 15px;
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
                            flex-basis: 25%;
                            margin: auto 0;
                            font-size: 14px;
                        }

                        input {
                            height: 20px;
                            flex-basis: 20%;
                        }
                    }
                }
            }
        }

        .confirm-ord {
            border-radius: 10px;
            height: 945px;

            .confirm-ord-title {
                height: 48px; //高的問題要解決
                font-size: 15px;
            }

            .prod-info {
                display: flex;
                padding-left: 20px;
                height: 30%;

                button {
                    background-color: transparent;
                    border: none;
                }

                .prod-img {
                    height: auto;
                    width: 30%;
                    object-fit: contain;
                    border-radius: 10px;
                    margin: auto 10px auto 0;

                }

                .prod-spec {
                    display: flex;
                    margin: auto 0;
                    width: 70%;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .prod-card {
                        h5 {
                            padding-bottom: 10px;
                            font-size: 14px;
                            flex-shrink: 1;
                        }

                        span {
                            line-height: 150%;
                            font-size: 14px;
                        }

                        .mention {
                            font-size: 12px;
                            padding-top: 50px;
                        }

                    }

                    .prod-count {
                        margin: auto;
                    }

                    .prod-sum {
                        margin: auto;
                    }

                }
            }

            .receiver-info {
                display: flex;
                margin: 20px 0;
                padding-left: 30px;
                align-items: center;

                .receiver {
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
                        flex-basis: 25%;
                        margin: auto 0;
                        font-size: 14px;
                    }

                    input {
                        height: 20px;
                        flex-basis: 25%;
                        font-size: 14px;
                    }

                    select {
                        height: 26px;
                        flex-basis: 10%;
                        margin-right: 10px;
                        background-color: rgba(249, 241, 229, 1);
                    }

                    .large-textarea {
                        height: 80px;
                        flex-basis: 25%;
                        resize: vertical;
                        /* 允許垂直調整大小 */

                    }


                }

            }

            .disc-line-form {
                margin-top: 20px;
                height: 1px;
                background-color: #828282;
            }

            .invoicing-title {
                display: flex;
                margin: 20px 0;
                padding-left: 30px;
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    height: 18px;
                    width: 2px;
                    background-color: rgba(190, 26, 14, 1);
                    left: 20px;
                    bottom: 0;
                    top: 0;
                }
            }

            .invoicing-form {
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
                        flex-basis: 25%;
                        margin: auto 0;
                        font-size: 14px;
                    }

                    input {
                        height: 20px;
                        flex-basis: 0;

                    }

                    .invoicing-cb {
                        width: 13px;
                        height: 13px;
                        margin: auto 10px auto 30px;
                    }

                    span {
                        display: inline-block;
                        margin: auto 0;
                        font-size: 14px;
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
                            flex-basis: 25%;
                            margin: auto 0;
                            font-size: 14px;
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
                            font-size: 14px;
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
                            flex-basis: 20%;

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

                        .switch-alert {
                            color: #be1a0e;
                            font-size: 12px;
                            padding-left: 20px;
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
}
</style>
<template>
    <div class="cart-container">
    <div class="cart-choose">
    <div class="choose-all">
     <input type="checkbox" v-model="selectAll" @change="toggleSelectAll"> 
     <h5>全選</h5>
    </div>
     <div class="delete-all">
     <button><img src="../assets/pic/garbage-can.svg" alt="垃圾桶"></button> 
     <h5>刪除已選項目</h5>
    </div>
    </div>

    <div class="card-list">
        <div class="disc-line"></div>
        <div class="card">
            <input type="checkbox">
            <div class="prod-detail">
                <img class="prod" src="../assets/pic/um1.jpg" alt="商品1">
                <div class="info">
                    <h5>數字精緻手工油紙傘</h5>
                    <p>圖案</p>
                </div>
            </div>

                <div class="amount">
                    <p>數量</p>
                    <button><i class="fa-solid fa-minus"></i></button>
                    <span>1</span>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="price">
                    NT$<span>699</span>
                </div>
                <div class="delete">
                    <button><img src="../assets/pic/garbage-can.svg" alt="垃圾桶"></button>
                </div>
            </div>
            <div class="card">
            <input type="checkbox">
            <div class="prod-detail">
                <img class="prod" src="../assets/pic/um4.jpg" alt="商品1">
                <div class="info">
                    <h5>杏色精緻手工油紙傘</h5>
                    <p>素色</p>
                </div>
            </div>

                <div class="amount">
                    <p>數量</p>
                    <button><i class="fa-solid fa-minus"></i></button>
                    <span>1</span>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="price">
                    NT$<span>699</span>
                </div>
                <div class="delete">
                    <button><img src="../assets/pic/garbage-can.svg" alt="垃圾桶"></button>
                </div>
            </div>
            <div class="disc-line"></div>
    </div>
    <div class="total-money">
    <h4>2件商品合計</h4>
    <p>NT$<span>1398</span></p>
    </div>
    <div class="checkout">
        <router-link to="/checkout_prod" class="checkout-link"><button>
    結帳</button></router-link>
    </div>
</div>
</template>
<script>
// export default {
//     data() {
//         return {
//             news_data:[],
//         }
//     },
//     mounted() {
//         fetch("/public/Cart.json")
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 this.news_data = json
//             });
//     },
//     methods: {

//     }
// }
</script>

<template>
    <section class="section-product">
        <div class="container-product">
            <div class="product-row">
                <div class="product-title">
                    <h2>商品列表</h2>
                </div>
                <div class="product-arrow">
                        <div class="product-arrow-btn">
                            <img src="../assets/pic/product-left.png" alt="">
                        </div>
                        <div class="product-arrow-btn">
                            <img src="../assets/pic/product-right.png" alt="">
                        </div>
                    </div>
            </div>
        </div>
        <div class="cardlist">
                    <div class="card" v-for="item in list" :key="item.id">
                        <div class="card-pic">
                            <img :src="item.pic">
                            <div class="card-fav"  >
                                <img class="card-fav-icon" @click="isFav(item.id)" :src="item.fav? solidHeart : hollowHeart" alt="heart">
                            </div>
                        </div>
                        <div class="card-txt">
                            <div class="card-tag">
                                <span>龍年限定</span>
                            </div>
                            <div class="card-title">
                                彩雲漫步精緻手工油紙傘
                            </div>
                            <div class="card-price">
                                NT$699
                            </div>

                        </div>
                    </div>
                </div>
        
    </section>
</template>

<script>
import hollowHeart from '@/assets/pic/heart-regular.svg';
import solidHeart from '@/assets/pic/heart-solid.svg';
import pic1 from '@/assets/pic/um1.jpg';
import pic2 from '@/assets/pic/um2.jpg';
import pic3 from '@/assets/pic/um3.jpg';
import pic4 from '@/assets/pic/um4.jpg';
export default {
  name: 'box',
  data() {
    return {
    hollowHeart,
    solidHeart,
    list: [
        {
          id: 1,
          pic: pic1,
          fav: false
        },
        {
          id: 2,
          pic: pic2,
          fav: false
        },
        {
          id: 3,
          pic: pic3,
          fav: false
        },
        {
          id: 4,
          pic: pic4,
          fav: false
        }
      ]
    }
  },
  methods: {
    isFav(id) {
        const item = this.list.find(item => item.id === id);
        if (item) {
        item.fav = !item.fav;
        }
    }
  },

}
</script>

<style lang="scss">
   .section-product {
    background-color: #CB2E27;
    padding-bottom: 50px;
    .container-product {
        padding: 50px 0;
        width: 80%;
        margin: 0 auto;
        .product-row {   
            display: flex;
            justify-content: space-between;
            .product-title {
                h2 {
                    color: white;
                    margin-bottom: 50px;
                }
            }
            .product-arrow {
                    display: flex;
                    gap: 30px;
                }
           
        }
    }
    .cardlist {
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
                gap: 24px;
                .card {
                    .card-pic {
                        position: relative;
                        margin-bottom: 20px;
                        > img {
                            width: 280px;
                            border-radius: 20px;
                            object-fit: cover;
                        }
                        .card-fav {
                            position: absolute;
                            right: 10px;
                            bottom: 10px;
                            .card-fav-icon {
                                width: 30px;
                            }
                            
                        }
                    }
                    .card-txt {
                        padding: 5px;
                        .card-tag {
                            margin-bottom: 20px;
                            > span {
                                background-color: #fff;
                                border-radius: 15px;
                                padding: 2px 10px;
                                font-size: 16px;
                                color: #CB2E27;
                            }
                        }
                        .card-title {
                            font-size: 20px;
                            font-weight: bold;
                            color: #fff;
                            margin-bottom: 20px;
                        }
                        .card-price {
                            font-family: noto sans tc;
                            font-size: 20px;
                            color: #fff;
                        }
                    }
                    
                }
                    
            }
   }
</style>


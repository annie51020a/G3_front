
<template>
    <section class="section-product">
        <div class="container">
            <div class="row">
                <div class="product-title">
                    <h2>商品列表</h2>
                </div>
                
                <div class="cardlist">
                    <div class="card" v-for="item in list" :key="item.id">
                        <div class="card-pic">
                            <img :src="item.pic">
                            <div class="card-fav"  >
                                <img @click="isFav(item.id)" :src="item.fav? solidHeart : hollowHeart" alt="heart">
                            </div>
                        </div>
                        <div class="card-text">
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
            </div>
        </div>
        
    </section>
</template>

<script>
export default {
  name: 'box',
  data() {
    return {
    hollowHeart: '../../pic/heart-regular.svg',
    solidHeart: '../../pic/heart-solid.svg',
    list: [
        {
          id: 1,
          pic: '../../pic/um1.jpg',
          fav: false
        },
        {
          id: 2,
          pic: '../../pic/um2.jpg',
          fav: false
        },
        {
          id: 3,
          pic: '../../pic/um3.jpg',
          fav: false
        },
        {
          id: 4,
          pic: '../../pic/um4.jpg',
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
    .container {
        padding: 50px 0;
        width: 80%;
        margin: 0 auto;
        .row {           
            .product-title {
                h2 {
                    color: white;
                    margin-bottom: 50px;
                }
            }
            .cardlist {
                display: flex;
                justify-content: flex-end;
                gap: 24px;
                .card {
                    .card-pic {
                        position: relative;
                        margin-bottom: 20px;
                        img {
                            width: 280px;
                            border-radius: 20px;
                            object-fit: cover;
                        }
                        .card-fav {
                            position: absolute;
                            right: 10px;
                            bottom: 10px;
                            img {
                                width: 30px;
                            }
                            
                        }
                    }
                    .card-text {
                        padding: 5px;
                        .card-tag {
                            margin-bottom: 20px;
                            span {
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
    }
   }
</style>


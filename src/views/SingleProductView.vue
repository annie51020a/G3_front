<template>
    <div class="container">
        <div class="product-window">
            <!-- {{ $route.params.id }} -->
            <div class="product-pic">
                <div class="product-pic-lg">
                    <img :src="currentLgPic"  :alt="productInfo.name">
                </div>
                <div class="product-pic-sm">
                    <img @click="changeLgPic(productInfo.pic1)" :src="parseIcon(productInfo.pic1)" :alt="productInfo.name">
                    <img @click="changeLgPic(productInfo.pic2)" :src="parseIcon(productInfo.pic2)" :alt="productInfo.name">
                    <img @click="changeLgPic(productInfo.pic3)" :src="parseIcon(productInfo.pic3)" :alt="productInfo.name">
                </div>

            </div>
            <div class="product-text">

                <div class="product-title">
                    {{ productInfo.name || '' }}
                </div>
                <div class="product-tag">
                    <span>{{ productInfo.tag || '' }}</span>
                </div>
                <div class="product-rating">
                    <span v-if="productInfo.rating !== undefined" v-for="star in Math.floor(productInfo.rating)"
                        :key="star">
                        🌟
                    </span>
                </div>
                <div class="product-price">
                    NT${{ productInfo.price || '' }}
                </div>
                <div class="product-count">
                    <p>數量</p>
                    <button><i class="fa-solid fa-minus"></i></button>
                    <span>1</span>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="product-fav">
                    <button type="button">
                        <i class="fa-regular fa-heart"></i>
                        加入收藏
                        
                    </button>
                </div>
                <div class="product-cart">
                    <button type="button">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        加入購物車
                        
                    </button>
                </div>
                <div></div>
                <div></div>
                <div class="product-info">
                    <p>商品介紹</p>
                    <p>{{ productInfo.desc || '' }}</p>
                </div>
            </div>

        </div>
        <div class="other-product">
            <h2>其他商品</h2>
        </div>
        <div class="other-product-window">
            <div v-if="responseData.length === 0">loading...</div>
            <div v-else-if="displayData.length === 0">nodata...</div>
            <div v-else class="display-window">
                <ProductCard v-for="item in displayData" :key="item.id" :item="item" />
            </div>
        </div>
    </div>


</template>

<script>
import ProductCard from '@/components/layout/ProductCard.vue'
export default {
    components: {
        ProductCard
    },
    data() {
        return {
            responseData: [],
            displayData: [],
            search: "",
            productInfo: {},
            currentLgPic: ''
        }
    },
    mounted() {
        this.fetchInfo();
        fetch(`${import.meta.env.BASE_URL}products.json`)
            .then(res => res.json())
            .then(json => {
                // 確認有沒有response
                console.log(json);
                // 備份還原用
                this.responseData = json
                // 顯示用
                this.displayData = json
            })
    },
    methods: {
        fetchInfo() {
            // API
            fetch(`${import.meta.env.BASE_URL}products.json`)
                .then(res => res.json())
                .then(json => {
                    this.productInfo = json.find(item => {
                        return item.id == this.$route.params.id
                    })
                    if (this.productInfo.pic1) {
                        this.currentLgPic = this.parseIcon(this.productInfo.pic1); // 初始設置大圖片
                    }
                    console.log(this.productInfo);
                })
                .catch((error) => {
                    // 錯誤例外
                    console.log(`Error: ${error}`);
                })
        },
        parseIcon(file) {
            // 指到src || ..的意思是“回到上一層”
            return new URL(`../assets/pic/product/${file}`, import.meta.url).href
        },
        changeLgPic(pic) {
	        console.log(this.parseIcon(pic))
            this.currentLgPic = this.parseIcon(pic);
        },

    },
}

</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    .product-window {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;

        .product-pic {
            width: 45%;

            .product-pic-lg {
                margin-bottom: 20px;

                >img {
                    width: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                }
            }

            .product-pic-sm {
                display: flex;
                justify-content: space-between;

                >img {
                    width: 31%;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }

        .product-text {
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 40px;

            .product-tag {


                >span {
                    background-color: #fff;
                    border-radius: 15px;
                    padding: 2px 10px;
                    font-size: 16px;
                    color: #CB2E27;
                    border: #CB2E27 1px solid;
                }
            }

            .product-title {
                font-size: 32px;
                font-weight: bold;
                color: #564A41;

            }

            .product-rating {}

            .product-price {
                font-family: noto sans tc;
                font-size: 32px;
                color: #564A41;
            }

            .product-count {
                display: flex;
                align-items: center;

                >p {
                    padding: 0 20px 0 0;
                    font-weight: 600;
                }

                >button {
                    margin: 0 10px;
                    border-radius: 50%;
                    background-color: white;
                    cursor: pointer;
                    border: rgba(177, 36, 26, 1) 1px solid;
                    color: rgba(177, 36, 26, 1);
                    width: 28px;
                    height: 28px;
                    font-size: 14px;
                    text-align: center;
                    &:hover {
                        background-color: #B1241A;
                        color: #fff;
                    }
                }

                >span {
                    color: #564a41;
                    font-weight: 600;
                }
            }

            .product-fav {
                >button {
                    background-color: #fff;
                    border: #B1241A 1px solid;
                    border-radius: 20px;
                    width: 60%;
                    padding: 5px;
                    font-family: noto serif hk;
                    font-size: 20px;
                    color: #B1241A;
                    transition: 0.1s;

                    &:hover {
                        background-color: #B1241A;
                        color: #fff;

                        .fa-heart {
                            color: #fff;

                        }
                    }

                    .fa-heart {
                        font-size: 24px;
                        color: #B1241A;
                        vertical-align: middle;

                    }

                }
            }

            .product-cart {
                >button {
                    background-color: #fff;
                    border: #B1241A 1px solid;
                    border-radius: 20px;
                    width: 60%;
                    padding: 5px;
                    font-family: noto serif hk;
                    font-size: 20px;
                    color: #B1241A;
                    transition: 0.1s;
                    &:hover {
                        background-color: #B1241A;
                        color: #fff;

                        .material-symbols-outlined {
                            color: #fff;

                        }
                    }

                    .material-symbols-outlined {
                        font-size: 24px;
                        color: #B1241A;
                        vertical-align: text-bottom;

                    }

                }
            }
            .product-info {
                > p {
                    &:first-child {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                   
                }
            }
        }
    }

    .other-product {
        text-align: center;
        margin-bottom: 50px;
    }

    .other-product-window {
        width: 100%;
        margin-bottom: 50px;

        .display-window {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
        }
    }
}
</style>
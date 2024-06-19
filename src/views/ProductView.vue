<template>
    <!-- banner -->
    <section class="product-banner-section">
        <div class="product-banner">
            <h1>周邊商品</h1>
        </div>
    </section>
    <!-- 搜尋框和排序 -->
    <section class="search-section">
        <select class="mb-select" @change="filterTag" >
            <option value="default">精緻手工油紙傘</option>
            <option value="圖案">圖案</option>
            <option value="素色">素色</option>
        </select>
        <div class="search-area">
            <input @input="filterData" type="text" v-model="search" class="search-input" placeholder="搜尋商品名稱">
            <i class="fa-solid fa-x" @click="clear"></i>
        </div>
        <select @change="sortData($event)">
            <option value="default">請選擇排序方式</option>
            <option value="highToLow">價格由高至低</option>
            <option value="lowToHigh">價格由低至高</option>
        </select>
    </section>
    <!-- 周邊商品 -->
    <div class="container">
        <div class="row">

            <div class="product-menu">
                <div class="product-title" @click="clear">
                    <img src="@/assets/pic/product/shoppingbag.png" alt="精緻手工油紙傘">
                    精緻手工油紙傘
                </div>
                <div class="product-tag" data-value="圖案"  @click="filterTag($event)">
                    圖案
                </div>
                <div class="product-tag" data-value="素色" @click="filterTag($event)">
                    素色
                </div>
                <router-link to="/customized">   
                    <div class="product-custom">
                        <img src="@/assets/pic/product/umbrella.png" alt="客製化油紙傘">
                        客製化油紙傘
                    </div>
                </router-link>
                
            </div>
            <div class="product-window">
                <div v-if="responseData.length === 0">loading...</div>
                <div v-else-if="displayData.length === 0">nodata...</div>
                <div v-else class="display-window">
                    <ProductCard class="product-card" v-for="item in displayData" :key="item.id" :item="item" />
                </div>
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
        }
    },
    //可以用create也可以用mounted
    // created() {
    mounted() {
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
        clear() {
            this.search = "";
            this.displayData = [...this.responseData];
        },
        filterTag(event) {
            const selectedTag = event.target.value || event.target.dataset.value;
            if (selectedTag === 'default') {
                this.displayData = [...this.responseData];
            } else {
                this.displayData = this.responseData.filter(item => item.tag === selectedTag);
            }
        },
        filterData() {
            console.log(this.search)
            this.displayData = this.responseData.filter((item) => {
                // return item.name == this.search
                return item.name.includes(this.search)
            })
        },
        clear() {
            this.search = "";
            this.displayData = this.responseData;
        },
        sortData(event) {
            const sortType = event.target.value;
            if (sortType === 'highToLow') {
                this.displayData.sort((a, b) => b.price - a.price);
            } else if (sortType === 'lowToHigh') {
                this.displayData.sort((a, b) => a.price - b.price);
            } else {
                this.displayData = [...this.responseData];
            }
        }
    }
}

</script>

<style lang="scss" scoped>

@import "@/assets/sass/style";

// banner
.product-banner-section {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 30px;
    margin-bottom: 50px;

    .product-banner {
        width: 90%;
        background-image: url('@/assets/pic/product/product-banner.jpg');
        background-position: center;
        background-size: cover;
        border-radius: 30px;
        padding: 10% 0;
        margin-top: 40px;


        >h1 {
            text-align: center;
            margin: auto;
            color: white;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.9);
        }
    }
}

// 搜尋框和排序
.search-section {
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    position: flex;
    flex-direction: column;
    gap: 10px;
    @include m(lg) {
        flex-direction: row;
        justify-content: flex-end;
        gap: 20px;
        width: 90%;
    }
    
    .mb-select {
        @include m(lg) {
                display: none;
            }
    }

    .search-area {
        position: relative;
        
        @include m(lg) {
        width: 25%;
    }

        .search-input {
            width: 100%;
            box-sizing: border-box;
            padding: 10px 20px 10px 50px;
            /* 左邊的 padding 留更多空間放置放大鏡圖示 */
            border: 1px solid #564A41;
            border-radius: 20px;
            background-color: white;
            font-size: 14px;
            background-image: url('@/assets/pic/product/search-icon.png');
            background-repeat: no-repeat;
            background-position: left 10px center;
            background-size: 28px;
            font-family: noto serif hk;

        }

        .fa-x {
            color: #564A41;
            position: absolute;
            right: 10px;
            top: 13px;
            cursor: pointer;
            vertical-align: middle;
            z-index: 10;

        }
    }

    select {
        width: 100%;
        border-radius: 20px;
        border: 1px solid #564A41;
        background-color: white;
        color: #564A41;
        padding: 10px;
        font-size: 14px;
        outline: none;
        font-family: noto serif hk;

        &:focus {
            outline: 1px solid #564A41;
        }
        @include m(lg) {
        width: 25%;
    }

    }
}


// 周邊商品
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;

    .row {
        display: flex;
        justify-content: space-between;
        gap: 30px;

        .product-menu {
            display: none;
            @include m(lg) {
                width: 20%;
                display: block;
            }
            

            .product-title {
                
                color: #564A41;
                cursor: pointer;
                font-size: 20px;
                margin-bottom: 10px;

                >img {
                    vertical-align: text-bottom;
                }
                
            }

            .product-tag {
                margin-bottom: 10px;
                cursor: pointer;
                color: #564A41;
                padding-left: 30px;
            }

            .product-custom {
                color: #fff;
                cursor: pointer;
                font-size: 20px;
                margin-bottom: 10px;
                width: 160px;
                background-color: #B1241A;
                padding: 10px;
                border-radius: 20px;

                >img {
                    vertical-align: middle;
                }
            }

        }

        .product-window {
            width: 90%;
            margin: 0 auto;
            @include m(lg) {
                width: 80%;
            }
            

            .display-window {
                width: 100%;
                display: flex;
                gap: 25px;
                flex-wrap: wrap;
                justify-content: space-between;
                @include m(lg) {
                    justify-content: flex-start;
                }
                
                .product-card {
                    width: 100%;
                    @include m(md) {
                        width: 45%;
                }
                    @include m(lg) {
                        width: 30%;
                }
                }
            }
        }
    }

}
</style>
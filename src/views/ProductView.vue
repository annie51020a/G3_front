<template>
    <!-- banner -->
    <section class="product-banner-section">
        <div class="product-banner">
            <h1>周邊商品</h1>
        </div>
    </section>
    <!-- 搜尋框和排序 -->
    <section class="search-section">
        <input type="text" class="search-input" placeholder="搜尋商品名稱">
        <select>
            <option value="default">請選擇排序方式</option>
            <option value="highToLow">價格由高至低</option>
            <option value="lowToHigh">價格由低至高</option>
        </select>
    </section>
    <!-- 周邊商品 -->
    <div class="container">
        <div class="row">
            <div class="product-menu">
                <div class="product-tag" @click="clear">全部</div>
                <div class="product-tag" @click="filterTag('圖案')">
                    圖案
                </div>
                <div class="product-tag" @click="filterTag('素色')">
                    素色
                </div>
            </div>
            <div class="product-window">
                <div v-if="responseData.length === 0">loading...</div>
                <div v-else-if="displayData.length === 0">nodata...</div>
                <div v-else class="display-window">
                    <ProductCard v-for="item in displayData" :key="item.id" :item="item" />
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
            displayData: []
        }
    },
    //可以用create也可以用mounted
    // created() {
    mounted() {
        fetch("/products.json")
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
            this.displayData = this.responseData
        },
        filterTag(tagName) {
            this.displayData = this.responseData.filter((item) => {
                return item.tag === tagName
            })
        }
    }
}

</script>

<style lang="scss">
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
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    gap: 25px;
    margin-bottom: 50px;

    .search-input {
        width: 25%;
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

        &:focus {
            outline: none;
            border-color: #CB2E27;
        }
    }

    select {
        border-radius: 20px;
        border: 1px solid #564A41;
        background-color: white;
        color: #564A41;
        padding: 10px;
        width: auto;
        font-size: 14px;
        outline: none;
        font-family: noto serif hk;
        &:focus {
            outline: none;
            border-color: #CB2E27;
        }
    }
}


// 周邊商品
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;

    .row {
        display: flex;

        .product-menu {
            width: 25%;

            .product-tag {
                margin-bottom: 10px;
                cursor: pointer;
                color: #564A41;
            }

        }

        .product-window {
            width: 75%;

            .display-window {
                display: flex;
                gap: 25px;
                flex-wrap: wrap;
            }
        }
    }

}
</style>
<template>
    <h1>周邊商品</h1>
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
h1 {
    text-align: center;
    color: #564A41;
    margin-bottom: 50px;
}
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
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
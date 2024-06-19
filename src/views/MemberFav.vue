<template>
    <section class="mem-fav">
        <div class="mem-title">
            <h1>收藏清單</h1>

        </div>
        <hr />

        <div class="mem-box">
            <MemberManageList class="mem-list" />
            <div class="product-window">
                <div class="search-area">
                    <input @input="filterData" type="text" v-model="search" class="search-input" placeholder="搜尋商品名稱">
                    <i class="fa-solid fa-x" @click="clear"></i>
                </div>
                <div v-if="responseData.length === 0">loading...</div>
                <div v-else-if="displayData.length === 0">nodata...</div>
                <div v-else class="display-window">
                    <ProductCard class="product-card" v-for="item in displayData" :key="item.id" :item="item" />
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import MemberManageList from '../components/layout/MemberManageList.vue'
import ProductCard from '@/components/layout/ProductCard.vue'

export default {
    components: {
        ProductCard,
        MemberManageList
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
        fetch(`${import.meta.env.BASE_URL}memberfav.json`)
            .then(res => res.json())
            .then(json => {
                // 確認有沒有response
                console.log(json);
                // 備份還原用
                this.responseData = json
                // 顯示用
                this.displayData = json.filter(item => item.fav === true);
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

.mem-fav {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;

    .mem-title {
        >h1 {
            margin-top: 50px;
            color: #564a41;

            @media screen and (max-width:576px) {
                margin-top: 180px;

            }

            @media screen and (min-width:577px) and (max-width:996px) {
                margin-top: 150px;
            }
        }
    }

    hr {
        width: 100%;
        color: #564a41;
        margin: 2% auto;
    }

    .mem-box {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 2% 0 15% 0;
        width: 100%;
        


        @media screen and (max-width:576px) {
            justify-content: space-around;
            
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            justify-content: space-around;

            .mem-list {
                margin: 0 auto;
            }

        }

        .mem-list {
            
            @media screen and (max-width:576px) {
                position: absolute;
                top: 0%;
                left: 0%;
                height: auto;
                display: grid;
                row-gap: 15px;
            }

            @media screen and (min-width:577px) and (max-width:996px) {
                position: absolute;
                top: 0%;
                left: 0%;
            }
        }

        .product-window {
            width: 90%;
            margin: 0 auto;

            @include m(lg) {
                width: 80%;
            }

            .search-area {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin-bottom: 20px;
                @include m(lg) {
                    justify-content: flex-end;
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

                    @include m(lg) {
                        width: 30%;
                    }

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

            .display-window {
                width: 100%;
                display: flex;
                gap: 25px;
                flex-wrap: wrap;
                justify-content: space-between;

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

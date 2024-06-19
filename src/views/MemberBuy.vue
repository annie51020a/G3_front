<template>
    <section class="mem-buy">
        <div class="mem-title">
            <h1>商品購買紀錄</h1>

        </div>
        <hr />

        <div class="mem-box">
            <MemberManageList class="mem-list" />
            <div class="buy-window">
                <div v-if="responseData.length === 0">loading...</div>
                <div v-else-if="displayData.length === 0">nodata...</div>
                <div v-else class="display-window">
                    <div class="buy-card" v-for="item in displayData" :key="item.id" :item="item">
                        <button class="detail-btn" type="button">訂單明細</button>
                        <ul class="buy-list">
                            <li class="order-id">
                                <div>
                                    訂單編號
                                </div>
                                <div>
                                    {{ item.id }}
                                </div>
                            </li>
                            <li class="order-date">
                                <div>
                                    訂購日期
                                </div>
                                <div>
                                    {{ item.date }}
                                </div>
                            </li>
                            <li class="order-status">
                                <div>
                                    訂單狀態
                                </div>
                                <div>
                                    {{ item.status }}
                                </div>
                            </li>
                            <li class="order-price">
                                <div>
                                    訂單狀態
                                </div>
                                <div>
                                    {{ item.price }}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    </section>
</template>

<script>
import MemberManageList from '../components/layout/MemberManageList.vue'

export default {
    components: {
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
        fetch(`${import.meta.env.BASE_URL}productorder.json`)
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

.mem-buy {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    position: relative;

    .mem-title {
        width: 100%;
        text-align: center;

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


        .buy-window {
            width: 100%;
            @include m(sm) {
                width: 80%;
            }

            .display-window {
                .buy-card {
                    background-color: #F9F1E5;
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 30px;
                    position: relative;

                    .detail-btn {
                        color: #fff;
                        cursor: pointer;
                        font-size: 20px;
                        font-family: noto serif hk;
                        width: fit-content;
                        background-color: #B1241A;
                        padding: 10px;
                        border-radius: 20px;
                        border: 0;
                        position: absolute;
                        top: 30px;
                        right: 30px;

                    }

                    .buy-list {
                        >li {
                            display: flex;
                            gap: 20px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }

        }



    }


}
</style>

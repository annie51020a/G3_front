<template>
    <section class="mem-my-discount">
        <div class="my-discount-title">
            <h1>我的優惠券</h1>
        </div>
        <hr />

        <div class="discount-box">
            <MemberManageList class="mem-discount-list" />

            <img class="discount-img" src="@/assets/pic/quiz/discount.png" alt="" />
            <router-link to="/product" class="link-to-product">
                <p>去逛逛</p>
            </router-link>
        </div>
    </section>
</template>

<script setup>
import MemberManageList from '../components/layout/MemberManageList.vue'
</script>

<style lang="scss">
.mem-my-discount {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;

    .my-discount-title {
        >h1 {
            margin-top: 50px;
            color: #564a41;
            @media screen and (max-width:576px) {
                margin-top: 180px;
            }
            @media screen and (min-width:577px) and (max-width:996px){
                margin-top: 150px;
            }
        }
    }

    hr {
        width: 100%;
        color: #564a41;
        margin: 2% auto;
    }

    .discount-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2% 0 15% 0;
        @media screen and (max-width:576px) {
            justify-content: space-around;
        }
        @media screen and (min-width:577px) and (max-width:996px){
            justify-content: space-around;
            .mem-discount-list{
                margin: 0 auto;
            }

        }

        .discount-img {
            width: 60%;
        }

        .link-to-product {
            background-color: #be1a0e;
            width: 140px;
            height: 50px;
            border: none;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            >p {
                font-size: 20px;
                color: white;
                text-align: center;
            }

            &:hover {
                background-color: white;
                color: #be1a0e;
                border: 1px solid #be1a0e;
                transition: 0.3s;

                >p {
                    color: #be1a0e;
                }
            }
        }
    }

    .mem-discount-list {
        @media screen and (max-width:576px) {
            position: absolute;
            top: 0%;
            left: 0%;
            height: 50%;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            position: absolute;
            top: 0%;
            left: 0%;
        }
    }
}
</style>

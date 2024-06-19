<template>
    <section class="mem-buy">
        <div class="mem-title">
            <h1>購買紀錄</h1>
            
        </div>
        <hr />

        <div class="mem-box">
            <MemberManageList class="mem-list" />

          
        </div>
    </section>
</template>

<script >
import MemberManageList from '../components/layout/MemberManageList.vue'
</script>

<style lang="scss" scoped>
.mem-buy {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    position: relative;

    .mem-title {
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

    .mem-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2% 0 15% 0;
        width: 100%;
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
        @media screen and (max-width:576px) {
            justify-content: space-around;
        }
        @media screen and (min-width:577px) and (max-width:996px){
            justify-content: space-around;
            .mem-list{
                margin: 0 auto;
            }

        }

    }

   
}
</style>

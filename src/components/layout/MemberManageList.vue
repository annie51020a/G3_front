<template>
    <ul class="member-manage-list">
        <!-- 補上router -->
        <li class="mem-account">
            <img src="@/assets/pic/mem-account.png" alt="">
            <router-link to="/memberinfo">  <h5>會員資料</h5> </router-link>
        </li>

        <li class="favorite-list">
            <img src="@/assets/pic/favorite-list.png" alt="">
            <router-link to="/memberfav">  <h5>收藏清單</h5> </router-link>
            
        </li>

        <li class="registration-record">
            <img src="@/assets/pic/registration-record.png" alt="">
            <router-link to="/memberactivity">  <h5>報名紀錄</h5> </router-link>
        </li>
        
        <li class="discount">
            <img src="@/assets/pic/discount.png" alt="">
            <router-link to="/memberdiscount">  <h5>優惠券</h5> </router-link>
        </li>

        <li class="purchase-history">
            <img src="@/assets/pic/purchase-history.png" alt="">
            <router-link to="/memberbuy">  <h5>購買紀錄</h5> </router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.member-manage-list{
    width: 20%;
    background-color: #be1a0e;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:576px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);  
        width: 100%;
        height: 100%;
        background-color: #FFFBF6;
        z-index: -2;
    }

    @media screen and (min-width:577px) and (max-width:996px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);  
        width: 100%;
        background-color: #FFFBF6;
        z-index: -2;
        row-gap: 10%;
    }
    
    .mem-account{
        display: flex;
        align-items: center;
        margin: 3% 0 1% 5%;
        color: white;
        > a {
            color: #FFF;
        }
        > h4 {
            padding-left: 1%;
        }
        @media screen and (max-width:576px) {
            width: 120px;
            height: 50px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            width: 140px;
            height: 50px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }
    }
    .favorite-list{
        display: flex;
        align-items: center;
        margin: 1% 0 1% 5%;
        color: white;
        > a {
            color: #FFF;
        }
        > h4 {
            padding-left: 1%;
        }
        @media screen and (max-width:576px) {
            width: 120px;
            height: 50px;
            grid-column: 2 / 3;
            grid-row: 1 / 2; 
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            width: 140px;
            height: 50px;
            grid-column: 2 / 3;
            grid-row: 1 / 2; 
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }
    }
    .registration-record{
        display: flex;
        align-items: center;
        margin: 1% 0 1% 5%;
        color: white;
        > a {
            color: #FFF;
        }
        > h4 {
            padding-left: 1%;
        }
        @media screen and (max-width:576px) {
            width: 120px;
            height: 50px;
            grid-column: 3 / 4;
            grid-row: 1 / 2; 
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            width: 140px;
            height: 50px;
            grid-column: 3 / 4;
            grid-row: 1 / 2; 
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }
    }
    .discount{
        display: flex;
        align-items: center;
        margin: 1% 0 1% 5%;
        color: white;
        > a {
            color: #FFF;
        }
        > h4 {
            padding-left: 1%;
        }
        @media screen and (max-width:576px) {
            width: 120px;
            height: 50px;
            grid-column: 1 / 2;
            grid-row: 2 / 3;  
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            width: 140px;
            height: 50px;
            grid-column: 1 / 2;
            grid-row: 2 / 3;  
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }
    }
    .purchase-history{
        display: flex;
        align-items: center;
        margin: 1% 0 3% 5%;
        color: white;
        > a {
            color: #FFF;
        }
        > h4 {
            padding-left: 1%;
        }
        @media screen and (max-width:576px) {
            width: 120px;
            height: 50px;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            width: 140px;
            height: 50px;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            background-color: #be1a0e;
            margin: auto;
            border-radius: 20px;
        }
    }
}

</style>
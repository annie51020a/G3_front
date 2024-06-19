<template>
    <section class="section-memberinfo">
        <div class="memberinfo-container">
            <div class="info-title">
                <h1>個人資料</h1>
            </div>
            <div class="meminfo">
                <MemberManageList class="meminfo-list" />
                <div class="info">
                    <div class="mempic">
                        <div class="pic">
                            <img src="/src/assets/pic/member/member_user_pic.jpg" alt="">
                        </div>
                        <div class="picupload">
                            <label for="userimg">
                                選擇檔案
                            </label>
                            <input type="file" id="userimg" name="userimg" accept="image/png, image/jpeg" />
                            <p>檔案大小:最大1MB<br>
                                檔案限制: JPEG / PNG</p>
                        </div>
                    </div>
                    <div class="content">
                        <h5>使用者帳號 ： aaa123</h5>
                        <h5>暱稱 ： <input type="text"></h5>
                        <h5>信箱 ： aa****@gmail.com <a href="">變更</a></h5>
                        <h5>電話 ： 0912****** <a href="">變更</a></h5>
                        <h5>性別 ： 
                            <input type="radio" id="gender-man" name="gender" value="man" checked />
                            <label for="gender-man">男性</label>
                            <input type="radio" id="gender-girl" name="gender" value="girl" />
                            <label for="gender-girl">女性</label>
                            <input type="radio" id="gender-else" name="gender" value="else" />
                            <label for="gender-else">其他</label>
                        </h5>
                        <h5>生日 ： 
                            <input type="date" value="2000-06-19" min="1960-01-01" max="2006-12-31" />
                        </h5>
                        <h5>地址 ： <input type="text"></h5>
                        <h5>載具編號 ： <input type="text" value="/"></h5>
                        <h5>統一編號 ： <input type="text"></h5>
                    </div>
                    <button class="meminfo-btn">
                        儲存
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import MemberManageList from '../components/layout/MemberManageList.vue'
</script>

<style lang="scss">

    .section-memberinfo{
        width: 100%;
        margin: 100px 0;
        .memberinfo-container{
            width: 1200px;
            margin: 0 auto;
            @media screen and (max-width:576px) {
                width: 80%;
                position: relative;
            }
            .info-title{
                color: #564A41;
                text-align: center;
                @media screen and (max-width:576px) {
                    padding-top: 80px;
                }
                &::after{
                    content: "";
                    background-color: #564A41;
                    margin: 30px auto;
                    display: block;
                    width: 80%;
                    height: 2px;
                    border-radius: 50px;
                    @media screen and (max-width:576px) {
                        width: 100%;
                    }
                }
            }
            .meminfo{
                display: flex;
                justify-content: center;
                .meminfo-list{
                    width: 15%;
                    height: 250px;
                    justify-content: center;
                    @media screen and (max-width:576px) {
                        position: absolute;
                        top: -6%;
                        height: 120px;
                    }
                }
                .info{
                    display: inline-block;
                    color: #564A41;
                    padding: 50px 100px;
                    background-color: #FFF6EA;
                    border-radius: 20px;
                    margin:  0 5%;
                    text-align: center;
                    @media screen and (max-width:576px) {
                        margin: 0;
                        padding: 20px 0;
                    }
                    .mempic{
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: space-between;
                        text-align: left;
                        @media screen and (max-width:576px) {
                            padding-left: 15px;
                        }
                        .pic{
                            width: 100px;
                            height: 100px;
                            border-radius: 50px;
                            background-color: white;
                            overflow: hidden;
                            img{
                                width: 100%;
                                vertical-align: middle;
                                object-fit: cover;
                            }
                        }
                        .picupload{
                            padding: 20px;
                            label{
                                padding: 5px 20px;
                                background-color: white;
                                border-radius: 20px;
                                cursor: pointer;
                            }
                            input[type="file"]{
                                display: none;
                            }
                            p{
                                margin-top: 20px;
                                @media screen and (max-width:576px) {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                    .content{
                        @media screen and (max-width:576px) {
                        padding-left: 15px;
                        h5{
                            font-size: 16px;
                        }
                        }
                        text-align: left;
                        input[type="text"],
                        input[type="date"]{
                            width: 65%;
                            padding: 5px 15px;
                            box-sizing: border-box;
                            border: 1px solid #ccc;
                            border-radius: 20px;
                            font-size: 16px;
                        }
                        input[type="radio"] {
                        display: none;
                            &:checked + label::before {
                                background-color: white;
                            }
                            &:checked + label::after {
                                content: "";
                                position: absolute;
                                left: 10%;
                                top: 50%;
                                transform: translate(-50% ,-50%);
                                width: 8px;
                                height: 8px;
                                border-radius: 50%;
                                background-color: #B1241A;
                                @media screen and (max-width:576px) {
                                    left: 12.5%;
                                }
                            }
                        }   
                        label {
                            margin-right: 15px;
                            position: relative;
                            padding-left: 20px;
                            cursor: pointer;
                            &::before {
                                content: "";
                                position: absolute;
                                left: 0;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 12px;
                                height: 12px;
                                border: 1px solid #564A41;
                                border-radius: 50%;
                                background-color: white;
                            }
                        }
                        h5{
                            margin-bottom: 2rem;
                        }
                    }
                    button {
                        appearance: none; 
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        border: none; 
                        background: none; 
                        padding: 0;
                    }
                    .meminfo-btn{
                        background-color: white;
                        color: #564A41; 
                        border-radius: 20px;
                        padding: 5px 30px;
                        font-size: 20px;
                        cursor: pointer;
                        transition: all 0.3s;
                        @media screen and (max-width:576px) {
                                    font-size: 16px;
                                }
                        &:hover{
                            background-color: #B1241A;
                            color: white; 
                        }
                    }
                }
            }
        }
    }




</style>
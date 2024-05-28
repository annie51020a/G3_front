
<template>
    <section class="banner">
        <h1 class="slogan">傳統油紙傘<br>華麗風采永流傳</h1>
        <p>傳統油紙傘在現代社會中仍然綻放著獨特的光彩<br>並且受到越來越多人的喜愛與重視。<br><br>讓我們一起珍惜這份傳統<br>將它的美麗與價值傳承下去<br>讓油紙傘的華麗風采永遠流傳下去。</p>
        <div class="about-us-btn">
            <p>了解我們傘韻</p>
            <button><img src="../../pic/about-us-btn.png" alt=""></button>
        </div>
        <div class="banner-btn-box">
            <div class="book-link">
                <a href="">
                    <img src="/pic/book-link.png" alt="">
                    <p>預約手作</p>
                </a>
            </div>
            <div class="product-link">
                <a href="">
                    <img src="/pic/product-link.png" alt="">
                    <p>周邊商品</p>
                </a>
            </div>
        </div>
    </section>
</template>

<style>

.banner{
    background-image: url(../../pic/banner-img.png);
    background-repeat: no-repeat;
    width: 90%;
    height: 90%;
    overflow: hidden;
    border-radius: 20px;
    margin: auto;
    background-size: cover;
    background-position: 50% 30%;
}
.slogan{
    color: white;
    font-size: 65px;
    padding-left: 5%;
    padding-top: 5%;
}
.banner > p{
    font-size: 16px;
    color: white;
    padding-left: 5%;
    padding-top: 5%;
}
.about-us-btn{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2%;
}
.about-us-btn p{
    color: white;
    padding-right: 10px;
}
.about-us-btn button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
}
.about-us-btn button img{
    margin: auto;
    width: 100%;
}
.banner-btn-box{
    display: flex;
    height: 100px;
}
.book-link{
    flex-grow: 1;
    text-align: center;
    border-top: 1px solid white;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.book-link a{
    display: flex;
    align-items: center;
    text-decoration: none;
}
.book-link a p{
    text-decoration: none;
    color: white;
    padding-left: 10px;
}
.product-link{
    flex-grow: 1;
    text-align: center;
    border-top: 1px solid white;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product-link a{
    display: flex;
    align-items: center;
    text-decoration: none;
}
.product-link a p{
    color: white;
    padding-left: 10px;
}
</style>
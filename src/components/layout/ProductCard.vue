<template>
    <div v-if="item" class="card">
        <div class="card-pic">
            <img v-if="item.image" :src="parseIcon(item.image)" :alt="item.name">
            <img v-else src="" alt="">
            <!-- <div class="card-fav">
                <img class="card-fav-icon" alt="heart">
            </div> -->
        </div>
        <div class="card-txt">
            <div class="card-tag">
                <span>{{ item.tag || '' }}</span>
            </div>
            <div class="card-title">
                {{ item.name || '' }}
            </div>
            <div class="card-rating">
                <span v-for="star in Math.floor(item.rating)" :key="star">
                    🌟
                </span>
            </div>
            <div class="card-price">
                NT${{ item.price || '' }}
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        parseIcon(file) {
            // 指到src || ..的意思是“回到上一層”
            return new URL(`../../assets/pic/${file}`, import.meta.url).href
        }
    }
}
</script>

<style lang="scss">
.card {
    .card-pic {
        position: relative;
        margin-bottom: 15px;

        > img {
            width: 280px;
            border-radius: 20px;
            object-fit: cover;
        }

        .card-fav {
            position: absolute;
            right: 10px;
            bottom: 10px;

            .card-fav-icon {
                width: 30px;
            }

        }
    }

    .card-txt {
        padding: 5px;

        .card-tag {
            margin-bottom: 15px;

            > span {
                background-color: #fff;
                border-radius: 15px;
                padding: 2px 10px;
                font-size: 16px;
                color: #CB2E27;
                border: #CB2E27 1px solid;
            }
        }

        .card-title {
            font-size: 20px;
            font-weight: bold;
            color: #564A41;
            margin-bottom: 15px;
        }

        .card-rating {
            margin-bottom: 15px;
        }

        .card-price {
            font-family: noto sans tc;
            font-size: 20px;
            color: #564A41;
        }
    }

}
</style>
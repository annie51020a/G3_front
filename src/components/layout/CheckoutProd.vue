<template>
    <div class="card" v-if="item">
      <div class="prod-detail">
        <img class="prod" :src="getImageUrl(item.pic1)" :alt="item.name">
        <div class="prod-spec">
          <div class="info">
            <h5>{{ item.name }}</h5>
            <p>{{ item.tag }}</p>
          </div>
          <div class="amount">
            <p>數量：{{ item.count }}</p>
          </div>
          <div class="price">
            <p>總計：NT${{ item.count * item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>


<script>
import { useCartStore } from '../../stores/cartStore.js';
import { getImageUrl } from '../../utils/utils.js';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl,
  },
};
</script>


<style lang="scss" scoped>
.card {
    display: flex;
    padding-left: 20px;
    height: 30%;
    border-bottom: 1px solid #ccc; // 添加這一行
    &:last-child {
        border-bottom: none; // 最後一個元素不需要邊框
    }
    
    .prod-detail {
        display: flex;
        margin: 20px 0;

        img {
            height: auto;
            width: 20%;
            object-fit: cover;
            border-radius: 20px;
            margin: auto 10px auto 0;

        }

        .prod-spec {
            display: flex;
            margin: auto 0;
            width: 80%;


            .info {
                width: 40%;

                h5 {
                    padding-bottom: 10px;
                }

                span {
                    line-height: 150%;
                    font-size: 14px;
                }
            }

            .amount {
                width: 30%;
                display: flex;
                margin: auto;
                justify-content: center;
            }

            .price {
                display: flex;
                width: 30%;
                margin: auto;
                justify-content: center;
            }

        }
    }
}
</style>
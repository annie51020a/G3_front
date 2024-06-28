<template>
    <div class="card">
        <input type="checkbox" v-model="localSelected" @change="emitToggleSelect" /> <!-- 使用 localSelected 來監聽 -->
        <RouterLink :to="`/product/${item.id}`" class="prod-detail">
            <img class="prod" :src="getImageUrl(item.pic1)" :alt="item.name">
            <div class="info">
                <h5>{{ item.name }}</h5>
                <p>{{ item.tag }}</p>
            </div>
        </RouterLink>
        <div class="amount">
            <p>數量</p>
            <!-- <button @click="decrementQuantity" :disabled="item.quantity <= 1"><i class="fa-solid fa-minus"></i></button>
            <span>{{ item.quantity }}</span> -->
            <button @click="decrementQuantity" :disabled="item.count <= 1"><i class="fa-solid fa-minus"></i></button>
            <!-- 確保使用 count -->
            <span>{{ item.count }}</span> <!-- 確保使用 count -->
            <button @click="incrementQuantity"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="price">
            NT$<span>{{ item.price }}</span> <!-- 修改這行，顯示單價 -->
        </div>
        <div class="delete">
            <button @click="removeItem"><img src="../../assets/pic/garbage-can.svg" alt="垃圾桶"></button>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../../stores/cartStore.js';
import { getImageUrl } from '../../utils/utils.js';

export default {
    props: ['item', 'selected'], // 新增selected prop
    data() {
        return {
            localSelected: this.selected, // 使用 localSelected 來監聽 prop selected
        };
    },
    watch: {
        selected(newVal) { // 當 prop selected 改變時，同步 localSelected
            this.localSelected = newVal;
        }
    },
    methods: {
        emitToggleSelect() {
            this.$emit('toggle-select', this.item.id, this.localSelected); // 發送事件通知父組件
        },
        incrementQuantity() {
            this.item.count += 1; // 使用 count 代替 quantity
      this.$emit('update-quantity', this.item.id, this.item.count);  // 通知父組件更新數量
        },
        decrementQuantity() {
            if (this.item.count > 1) { // 使用 count 代替 quantity
        this.item.count -= 1;
        this.$emit('update-quantity', this.item.id, this.item.count);  // 通知父組件更新數量
            }
        },
        removeItem() {
            this.$emit('remove-item', this.item.id); // 通知父組件移除項目
        },
        getImageUrl,
    },
};
</script>

<style scoped>
/* ... existing styles ... */
</style>
  
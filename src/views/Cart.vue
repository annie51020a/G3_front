<template>
    <div class="cart-container">
        <div class="cart-choose">
            <div class="choose-all">
                <input type="checkbox" :checked="isAllSelected" @change="toggleSelectAll"> <!-- 使用 :checked 綁定 -->
                <h5>全選</h5>
            </div>
            <div class="delete-all">
                <button @click="removeSelectedItems"><img src="../assets/pic/garbage-can.svg" alt="垃圾桶"><h5>刪除已選項目</h5></button>
                
            </div>
        </div>

        <div class="card-list">
            <div class="disc-line"></div>
            <CartItem v-for="item in cartStore.cart" :key="item.id" :item="item"
                :selected="selectedItems.includes(item.id)" @update-quantity="updateQuantity" @remove-item="removeItem"
                @toggle-select="toggleSelect" />
            <div class="disc-line"></div>
        </div>
        <div class="total-money">
            <h4>{{ selectedItems.length }}件商品合計</h4> <!-- 顯示已選擇的商品數量 -->
            <p>NT$<span>{{ totalAmount }}</span></p> <!-- 顯示總金額 -->
        </div>
        <div class="checkout">
            <router-link to="/checkout_prod" class="checkout-link">
                <button :disabled="selectedItems.length === 0">結帳</button> 
            </router-link>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore.js'
import CartItem from '../components/layout/CartItem.vue'

export default {
  components: { CartItem },
  setup() {
    const cartStore = useCartStore()

    return {
      cartStore,
    }
  },
  computed: {
    isAllSelected() { // 新增這段，計算是否全選
      return this.cartStore.cart.length > 0 && this.selectedItems.length === this.cartStore.cart.length;
    },
    totalAmount() { // 新增這段，計算總金額
      return this.cartStore.cart.reduce((total, item) => {
        if (this.selectedItems.includes(item.id)) {
            return total + item.price * item.count; // 確保使用 count
        }
        return total;
      }, 0);
    }
  },
  data() {
    return {
      selectedItems: [],
    };
  },
  created() {
    this.cartStore.checkCart();
    this.selectedItems = this.cartStore.cart.map(item => item.id); // 默認選中所有商品
  },
  methods: {
    updateQuantity(id, quantity) {
      const item = this.cartStore.cart.find(item => item.id === id);
      if (item) {
        item.count = quantity; // 使用 count 代替 quantity
        this.cartStore.addCart(item); // 确保更新 localStorage
      }
    },
    removeItem(id) {
      const item = this.cartStore.cart.find(item => item.id === id);
      this.cartStore.removeCart(item);
      this.selectedItems = this.selectedItems.filter(itemId => itemId !== id); // 更新選中項
    },
    toggleSelect(id, selected) {
      if (selected) {
        this.selectedItems.push(id);
      } else {
        this.selectedItems = this.selectedItems.filter(itemId => itemId !== id);
      }
    },
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedItems = this.cartStore.cart.map(item => item.id);
      } else {
        this.selectedItems = [];
      }
    },
    removeSelectedItems() {
        if (this.isAllSelected) {
        this.cartStore.cleanCart(); // 清空购物车
        this.selectedItems = [];
      } else {
        this.selectedItems.forEach(id => {
          const item = this.cartStore.cart.find(item => item.id === id);
          this.cartStore.removeCart(item);
        });
        this.selectedItems = [];
      }
    },
    checkout() {
      // 執行結帳邏輯
      alert(`結帳總金額: $${this.totalAmount}`);
    }
  }
}
</script>

<style scoped>
/* ... existing styles ... */
</style>
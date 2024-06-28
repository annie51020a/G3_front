<template>
  <div class="cart-container">
    <div class="cart-choose">
      <div class="choose-all">
        <input type="checkbox" :checked="isAllSelected" @change="toggleSelectAll"> <!-- 使用 :checked 綁定 -->
        <h5>全選</h5>
      </div>
      <div class="delete-all">
        <button @click="removeSelectedItems"><img src="../assets/pic/garbage-can.svg" alt="垃圾桶">
          <h5>刪除已選項目</h5>
        </button>

      </div>
    </div>

    <div class="card-list">
      <div class="disc-line"></div>
      <CartItem v-for="item in cartStore.cart" :key="item.id" :item="item"
        :selected="cartStore.selectedItems.includes(item.id)" @update-quantity="updateQuantity"
        @remove-item="removeItem" @toggle-select="toggleSelect" />
      <div class="disc-line"></div>
    </div>
    <div class="total-money">
      <h4>{{ cartStore.selectedItems.length }}件商品合計</h4> <!-- 顯示已選擇的商品數量 -->
      <p>NT$<span>{{ totalAmount }}</span></p> <!-- 顯示總金額 -->
    </div>
    <div class="checkout">
      <!-- <router-link to="/checkout_prod" class="checkout-link">
                <button :disabled="selectedItems.length === 0">結帳</button> 
            </router-link> -->
      <router-link to="/checkout_prod" class="checkout-link" @click.native="prepareCheckout">
        <button :disabled="cartStore.selectedItems.length === 0">結帳</button>
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
      cartStore, // 添加 cartStore
    }
  },
  computed: {
    isAllSelected() {
      return this.cartStore.cart.length > 0 && this.cartStore.selectedItems.length === this.cartStore.cart.length;
    },
    totalAmount() {
      return this.cartStore.cart.reduce((total, item) => {
        if (this.cartStore.selectedItems.includes(item.id)) {
          return total + item.price * item.count;
        }
        return total;
      }, 0);
    }
  },
  created() {
    this.cartStore.checkCart();
    if (this.cartStore.selectedItems.length === 0) {
      this.cartStore.selectAllItems(); // 默認選中所有商品
    }
  },
  methods: {
    updateQuantity(id, quantity) {
      const item = this.cartStore.cart.find(item => item.id === id);
      if (item) {
        item.count = quantity;
        this.cartStore.addCart(item);
      }
    },
    removeItem(id) {
      const item = this.cartStore.cart.find(item => item.id === id);
      this.cartStore.removeCart(item);
      this.cartStore.deselectItem(id);
    },
    toggleSelect(id, selected) {
      this.cartStore.toggleSelectItem(id);
    },
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.cartStore.selectAllItems();
      } else {
        this.cartStore.deselectAllItems();
      }
    },
    removeSelectedItems() {
      this.cartStore.selectedItems.forEach(id => {
        const item = this.cartStore.cart.find(item => item.id === id);
        this.cartStore.removeCart(item);
      });
      this.cartStore.clearSelectedItems();
    },
    prepareCheckout() {
      this.cartStore.selectedItems = [...this.cartStore.selectedItems];
    }
  }
}
</script>

<style scoped>
/* ... existing styles ... */
</style>
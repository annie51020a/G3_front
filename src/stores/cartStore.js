// cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: [],
    }),
    getters: {
        cartCount: (state) => state.cart.length,
        totalAmount: (state) => state.cart.reduce((total, item) => total + item.price * item.count, 0), // 确保使用 count
        uniqueItemCount: (state) => state.cart.length, // 购物车中不同商品的数量
    },
    actions: {
        checkCart() {
            const storageCart = localStorage.getItem('cart')
            if (this.cart.length > 0) {
                return this.cart
            } else if (storageCart) {
                const cartArray = JSON.parse(storageCart)
                this.cart = cartArray
                return cartArray
            } else {
                return []
            }
        },
        addCart(payload) {
            if (!payload) return

            const isExistIndex = this.cart.findIndex(item => item.id === payload.id)
            if (isExistIndex >= 0) {
                this.cart[isExistIndex]['count'] = payload.count // 更新数量
            } else {
                this.cart.push({
                    ...payload,
                    count: payload.count || 1 // 使用 count 代替 quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        removeCart(payload) {
            if (!payload) return

            const isExistIndex = this.cart.findIndex(item => item.id === payload.id)
            if (isExistIndex >= 0) {
                this.cart.splice(isExistIndex, 1); // 直接删除该项
            }
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        cleanCart() {
            this.cart = []
            localStorage.removeItem('cart')
        }
    }
})

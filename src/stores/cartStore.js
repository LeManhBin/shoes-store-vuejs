import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  }),
  actions: {
    addToCart(payload) {
      const existingItem = this.cartItems.find(
        (item) => item.product.id === payload.product.id
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + payload.quantity;
      } else {
        this.cartItems.push(payload);
      }
      toast.success("Add item success");
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    deleteToCart(id) {
      this.cartItems = this.cartItems.filter((item) => item.product.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      toast.success("Remove item success");
    },
    clearCart() {
      this.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

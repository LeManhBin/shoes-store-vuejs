import {
  fetchCreateOrder,
  fetchGetAllOrder,
  fetchGetOrderById,
  fetchOrderByIdUser,
} from "@/api/orderApi";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orders: [],
    order: {},
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 8,
    totalPages: 1,
  }),
  actions: {
    async actCreateOrder(order) {
      try {
        this.isLoading = true;
        const data = await fetchCreateOrder(order);
        if (data) {
          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async actGetAllOrder() {
      try {
        this.isLoading = true;
        const data = await fetchGetAllOrder();
        if (data) {
          this.isLoading = false;
          this.orders = data?.data;
          this.totalPages = Math.ceil(data.data.length / this.itemsPerPage);
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async actGetOrderById(id) {
      try {
        this.isLoading = true;
        const data = await fetchGetOrderById(id);
        if (data) {
          this.isLoading = false;
          this.order = data?.data;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async actGetOrderByIdUser(userId) {
      try {
        this.isLoading = true;
        const data = await fetchOrderByIdUser(userId);
        if (data) {
          this.isLoading = false;
          this.orders = data.data;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
  },
});

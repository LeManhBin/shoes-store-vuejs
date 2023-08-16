import {
  fetchDeleteProduct,
  fetchAllProduct,
  fetchCreateProduct,
  fetchProductById,
  fetchUpdateProduct,
  fetchSearchProduct,
} from "@/api/productApi";
import { defineStore } from "pinia";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    productSearch: [],
    product: {},
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 4,
    totalPages: 1,
  }),
  actions: {
    async actSearchProduct(typing) {
      try {
        this.isLoading = true;
        const data = await fetchSearchProduct(typing);
        if (data?.data.length > 0) {
          this.isLoading = false;
          this.productSearch = data.data;
          this.totalPages = Math.ceil(data.data.length / this.itemsPerPage);
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async actGetAllProducts() {
      try {
        this.isLoading = true;
        const data = await fetchAllProduct();
        if (data?.data.length > 0) {
          this.isLoading = false;
          this.products = data.data;
          this.totalPages = Math.ceil(data.data.length / this.itemsPerPage);
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async actGetProductById(id) {
      try {
        this.isLoading = true;
        const data = await fetchProductById(id);
        if (data.data) {
          this.isLoading = false;
          this.product = data.data;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async actCreateProduct(product) {
      try {
        this.isLoading = true;
        const data = await fetchCreateProduct(product);
        if (data) {
          this.isLoading = false;
          await this.actGetAllProducts();
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    async actDeleteProduct(id) {
      try {
        this.isLoading = true;
        const data = await fetchDeleteProduct(id);
        if (data) {
          this.isLoading = false;
          await this.actGetAllProducts();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async actUpdateProduct(id, payload) {
      try {
        this.isLoading = true;
        const data = await fetchUpdateProduct(id, payload);
        if (data) {
          this.isLoading = false;
          await this.actGetAllProducts();
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
  },
  getters: {
    get4Item: (state) => {
      return state.products.slice(0, 4);
    },
  },
});

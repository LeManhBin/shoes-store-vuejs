import { defineStore } from "pinia";
import {
  loginUser,
  registerUser,
  getInforMe,
  getAllUser,
  fetchDeleteUser,
  fetchUpdateUser,
  getUserById,
} from "../api/authApi";
import jwt_decode from "jwt-decode";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    myUser: {},
    user: {},
    isLoading: false,
    accessToken: "" || localStorage.getItem("token"),
    isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
    currentPage: 1,
    itemsPerPage: 4,
    totalPages: 1,
  }),
  actions: {
    async actGetAllUser() {
      try {
        this.isLoading = true;
        const data = await getAllUser();
        if (data) {
          this.isLoading = false;
          this.users = data.data;
          this.totalPages = Math.ceil(data.data.length / this.itemsPerPage);
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async actUserById() {
      try {
        this.isLoading = true;
        const data = await getUserById();
        if (data) {
          this.isLoading = false;
          this.user = data.data;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async fetchRegisterUser(user) {
      try {
        this.isLoading = true;
        const data = await registerUser(user);
        if (data) {
          this.isLoading = false;
          this.actGetAllUser();
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async fetchLoginUser(account) {
      try {
        this.isLoading = true;
        const data = await loginUser(account);
        if (data) {
          this.isLoading = false;
          this.accessToken = data?.data.accessToken;
          localStorage.setItem("token", data?.data.accessToken);
          localStorage.setItem("isLogged", JSON.stringify(true));
          this.myUser = data.data.user;
          this.isLogged = true;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },

    async fetchReLogin(accessToken) {
      try {
        const decodeToken = jwt_decode(accessToken);
        if (decodeToken?.email) {
          const repsInfo = await getInforMe(decodeToken.email);
          const infoUser = repsInfo?.data[0];
          this.myUser = infoUser;
          localStorage.setItem("isLogged", JSON.stringify(true));
          this.isLogged = true;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },

    actLogout() {
      localStorage.removeItem("token");
      localStorage.setItem("isLogged", JSON.stringify(false));
      this.isLogged = false;
      this.myUser = {};
      this.accessToken = "";
    },

    async actDeleteUser(id) {
      try {
        this.isLoading = true;
        const data = await fetchDeleteUser(id);
        if (data) {
          this.actGetAllUser();
          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async actUpdateUser(id, payload) {
      try {
        this.isLoading = true;
        const data = await fetchUpdateUser(id, payload);
        if (data) {
          this.actGetAllUser();
          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
  },
  getters: {},
});

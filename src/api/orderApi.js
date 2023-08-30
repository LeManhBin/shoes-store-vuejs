import { BASE_URL } from "@/constants/url";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
export const fetchGetAllOrder = async () => {
  try {
    const data = await axios.get(`${BASE_URL}orders`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetOrderById = async (id) => {
  try {
    const data = await axios.get(`${BASE_URL}orders/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateOrder = async (order) => {
  try {
    const data = await axios.post(`${BASE_URL}orders`, order);
    toast.success("Create success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchDeleteOrder = async (id) => {
  try {
    const data = await axios.delete(`${BASE_URL}orders/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchUpdateOrder = async (id, payload) => {
  try {
    const data = await axios.patch(`${BASE_URL}orders/${id}`, payload);
    toast.success("Update success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchOrderByIdUser = async (userId) => {
  try {
    const data = await axios.get(`${BASE_URL}orders?userId=${userId}`);
    return data;
  } catch (error) {
    console.log("Error");
  }
};

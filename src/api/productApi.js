import { BASE_URL } from "@/constants/url";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
export const fetchAllProduct = async () => {
  try {
    const data = await axios.get(`${BASE_URL}products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const data = await axios.get(`${BASE_URL}products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateProduct = async (product) => {
  try {
    const data = await axios.post(`${BASE_URL}products`, product);
    toast.success("Create success");
    return data;
  } catch (error) {
    toast.warning("error");
    console.log(error);
  }
};

export const fetchDeleteProduct = async (id) => {
  try {
    const data = await axios.delete(`${BASE_URL}products/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchUpdateProduct = async (id, payload) => {
  try {
    const data = await axios.put(`${BASE_URL}products/${id}`, payload);
    toast.success("Update success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchSearchProduct = async (typing) => {
  try {
    const data = await axios.get(`${BASE_URL}products?q=${typing}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

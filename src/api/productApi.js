import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
export const fetchAllProduct = async () => {
  try {
    const data = await axios.get("http://localhost:4000/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:4000/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateProduct = async (product) => {
  try {
    const data = await axios.post(`http://localhost:4000/products`, product);
    toast.success("Create success");
    return data;
  } catch (error) {
    toast.warning("error");
    console.log(error);
  }
};

export const fetchDeleteProduct = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:4000/products/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchUpdateProduct = async (id, payload) => {
  try {
    const data = await axios.put(
      `http://localhost:4000/products/${id}`,
      payload
    );
    toast.success("Update success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchSearchProduct = async (typing) => {
  try {
    const data = await axios.get(`http://localhost:4000/products?q=${typing}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

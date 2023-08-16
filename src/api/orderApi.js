import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
export const fetchGetAllOrder = async () => {
  try {
    const data = await axios.get("http://localhost:4000/orders");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetOrderById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:4000/orders/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateOrder = async (order) => {
  try {
    const data = await axios.post("http://localhost:4000/orders", order);
    toast.success("Create success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchDeleteOrder = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:4000/orders/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchUpdateOrder = async (id, payload) => {
  try {
    const data = await axios.patch(
      `http://localhost:4000/orders/${id}`,
      payload
    );
    toast.success("Update success");
    return data;
  } catch (error) {
    toast.error("Error");
    console.log(error);
  }
};

export const fetchOrderByIdUser = async (userId) => {
  try {
    const data = await axios.get(
      `http://localhost:4000/orders?userId=${userId}`
    );
    return data;
  } catch (error) {
    console.log("Error");
  }
};

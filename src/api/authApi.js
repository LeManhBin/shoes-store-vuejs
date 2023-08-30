import { BASE_URL } from "@/constants/url";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
//Register
export const registerUser = async (user) => {
  try {
    const data = await axios.post(`${BASE_URL}users/regiter`, user);
    toast.success("Register success");
    return data;
  } catch (error) {
    if (error.response.status == 400) {
      toast.warning("Email already exists");
    } else {
      toast.error("error");
    }
  }
};

//Login
export const loginUser = async (account) => {
  try {
    const data = await axios.post(`${BASE_URL}login`, account);
    toast.success("Login success");
    return data;
  } catch (error) {
    toast.error("error");
  }
};

export const getInforMe = async (email) => {
  try {
    const data = await axios.get(`${BASE_URL}users?email=${email}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async () => {
  try {
    const data = await axios.get(`${BASE_URL}users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const data = await axios.get(`${BASE_URL}users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteUser = async (id) => {
  try {
    const data = await axios.delete(`${BASE_URL}users/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
  }
};

export const fetchUpdateUser = async (id, payload) => {
  try {
    const data = await axios.put(`${BASE_URL}users/${id}`, payload);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
  }
};

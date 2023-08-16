import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();
//Register
export const registerUser = async (user) => {
  try {
    const data = await axios.post("http://localhost:4000/users/regiter", user);
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
    const data = await axios.post("http://localhost:4000/login", account);
    toast.success("Login success");
    return data;
  } catch (error) {
    toast.error("error");
  }
};

export const getInforMe = async (email) => {
  try {
    const data = await axios.get(`http://localhost:4000/users?email=${email}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async () => {
  try {
    const data = await axios.get(`http://localhost:4000/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:4000/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteUser = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:4000/users/${id}`);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
  }
};

export const fetchUpdateUser = async (id, payload) => {
  try {
    const data = await axios.put(`http://localhost:4000/users/${id}`, payload);
    toast.success("Delete success");
    return data;
  } catch (error) {
    toast.error("Error");
  }
};

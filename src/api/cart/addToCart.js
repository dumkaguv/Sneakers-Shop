import axios from "axios";

import API_URL from "./getApiUrlWithEndPoint";

const addToCart = async (data) => {
  try {
    await axios.post(`${API_URL}`, data);
  } catch (error) {
    console.error("Ошибка при добавлении объекта:", error.message);
    throw error;
  }
};

export default addToCart;

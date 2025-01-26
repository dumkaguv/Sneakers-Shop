import axios from "axios";

import API_URL from "./getApiUrlWithEndPoint";

async function getItemsFromCart() {
  try {
    return await axios.get(`${API_URL}`);
  } catch (error) {
    console.error("Ошибка при получении объекта:", error.message);
    throw error;
  }
}

export default getItemsFromCart;

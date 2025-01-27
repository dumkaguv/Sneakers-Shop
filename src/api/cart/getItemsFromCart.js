import axios from "axios";

import API_URL from "./getApiUrlWithEndPoint";

async function getItemsFromCart() {
  try {
    const response = await axios.get(`${API_URL}`);
    
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении объекта:", error.message);
    throw error;
  }
}

export default getItemsFromCart;

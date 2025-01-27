import axios from "axios";

import API_URL from "./getApiUrlWithEndPoint";
import getItemsFromCart from "./getItemsFromCart";

async function removeFromCart(item) {
  try {
    const data = await getItemsFromCart();

    const targetId = data.find((obj) => item.parentId === obj.parentId).id;

    if (!targetId) {
      console.log("Объект, удовлетворяющий условию, не найден.");
      return;
    }

    await axios.delete(`${API_URL}/${targetId}`);
  } catch (error) {
    console.error("Ошибка при удалении объекта:", error.message);
    throw error;
  }
}

export default removeFromCart;

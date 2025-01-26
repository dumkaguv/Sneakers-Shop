import axios from "axios";

import API_URL from "./getApiUrlWithEndPoint";

const addToEndpoint = async (data) => {
  try {
    const response = await axios.post(`${API_URL}`, data);
  } catch (error) {
    console.error("Ошибка при добавлении объекта:", error.message);
    throw error;
  }
};

export default addToEndpoint;

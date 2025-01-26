import axios from "axios";

const getItems = async () => {
  try {
    const response = await axios.get(
      "https://67951063aad755a134eb1c65.mockapi.io/api/items"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getItems;

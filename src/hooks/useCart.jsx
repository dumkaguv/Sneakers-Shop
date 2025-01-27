import { useState } from "react";

import getItemsFromCart from "@/api/cart/getItemsFromCart";
import addToCart from "@/api/cart/addToCart";
import removeFromCart from "@/api/cart/removeFromCart";
import getTotalPrice from "@/api/cart/getTotalPrice";

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

  const getCartItems = async () => {
    try {
      const data = await getItemsFromCart();

      setCartItems(data);

      const newTotalPrice = data.reduce(
        (totalPrice, currentPrice) => totalPrice + currentPrice.price,
        0
      );

      setTotalPrice(newTotalPrice);
      setTax(newTotalPrice * 0.05);
    } catch (error) {
      console.error("cart drawer error", error);
    }
  };

  return {
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    tax,
    setTax,
    addToCart,
    removeFromCart,
    getCartItems,
    getTotalPrice,
  };
}

export default useCart;

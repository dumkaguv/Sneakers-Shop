import { createContext, useContext, useState } from "react";

import getItemsFromCart from "@/api/cart/getItemsFromCart";
import addToCart from "@/api/cart/addToCart";
import removeFromCart from "@/api/cart/removeFromCart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        getItemsFromCart,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    console.error("cart context error");
  }

  return context;
}

export default useCartContext;

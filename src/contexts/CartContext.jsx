import { createContext, useContext, useState } from "react";

import useCart from "@/hooks/useCart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const methods = useCart();

  return (
    <CartContext.Provider value={{ ...methods, isCartOpen, setIsCartOpen }}>
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

import { createContext, useContext } from "react";
import useItems from "@/hooks/useItems";

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  return (
    <ItemsContext.Provider value={useItems()}>{children}</ItemsContext.Provider>
  );
}

function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
}

export default useItemsContext;

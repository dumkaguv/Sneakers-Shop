import React from "react";

import styles from "./ProductList.module.scss";
import ProductCard from "@/components/ProductCard";
import useItemsContext from "@/contexts/ItemsContext";

function ProductList({ searchInputValue = "" }) {
  const { items } = useItemsContext();

  return (
    <ul className={`${styles.root} container`}>
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(searchInputValue.toLowerCase())
        )
        .map((item, index) => (
          <li key={`${item}-${index}`}>
            <ProductCard
              parentId={index}
              price={item.price}
              name={item.name}
              image={item.image}
            />
          </li>
        ))}
    </ul>
  );
}

export default ProductList;

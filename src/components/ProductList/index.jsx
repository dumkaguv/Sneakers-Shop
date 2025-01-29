import React from "react";

import styles from "./ProductList.module.scss";
import ProductCard from "@/components/ProductCard";
import useItemsContext from "@/contexts/ItemsContext";

function ProductList({ searchInputValue = "", items = [] }) {
  if (items.length === 0) {
    items = useItemsContext().items;
  }

  function renderItems() {
    return items
      .filter((item) =>
        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
      )
      .map((item, index) => (
        <li key={Number(item.id) || index}>
          <ProductCard
            parentId={Number(item.id) || Number(item.parentId)}
            price={item.price}
            name={item.name}
            image={item.image}
          />
        </li>
      ));
  }

  return (
    <ul className={`${styles.root} container`}>
      {renderItems().length > 0
        ? renderItems()
        : searchInputValue && "Ничего не найдено 😞"}
    </ul>
  );
}

export default ProductList;

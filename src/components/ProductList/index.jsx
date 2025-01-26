import React from "react";

import styles from "./ProductList.module.scss";
import ProductCard from "@/components/ProductCard";
import getItems from "@/api/getItems";

function ProductList() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data =  await getItems();
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(items);

  return (
    <ul className={`${styles.root} container`}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <ProductCard price={item.price} name={item.name} index={index + 1} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

import { useState, useEffect } from "react";
import getItems from "@/api/getItems"

function useItems() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { items, setItems, isLoading, setIsLoading };
}

export default useItems;

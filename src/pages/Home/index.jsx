import { useState } from "react";
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";

import styles from "./Home.module.scss";

function Home() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchTitles = {
    searchEmpty: "Все кроссовки",
    searchNotEmpty: `Поиск по запросу "${searchInputValue}"`,
  };

  function onInputChange(event) {
    setSearchInputValue(event.target.value);
  }

  return (
    <>
      <Slider />

      <section>
        <div className={`${styles.row} container`}>
          <h2>
            {searchInputValue
              ? searchTitles.searchNotEmpty
              : searchTitles.searchEmpty}
          </h2>

          <SearchBar inputValue={searchInputValue} setInputValue={onInputChange} />
        </div>
        <ProductList searchInputValue={searchInputValue} />
      </section>
    </>
  );
}

export default Home;

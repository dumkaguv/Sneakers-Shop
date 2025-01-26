import React from "react";
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";

import styles from "./Home.module.scss"

function Home() {
  return (
    <>
      <Slider />

      <section>
        <div className={`${styles.row} container`}>
          <h2>Все кроссовки</h2>

          <SearchBar />
        </div>
        <ProductList />
      </section>
    </>
  );
}

export default Home;

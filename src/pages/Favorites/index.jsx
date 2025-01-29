import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Favorites.module.scss";
import ProductList from "@/components/ProductList";
import useCartContext from "@/contexts/CartContext";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { getCartItems } = useCartContext();

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.row}>
          <Link className={styles.goBack} to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="34"
                height="34"
                rx="7.5"
                fill="white"
                stroke="#F2F2F2"
              />
              <path
                d="M19 22L14 17L19 12"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className={styles.title}>Мои закладки</h1>
        </div>
        {favorites.length > 0 ? (
          <ProductList items={favorites} />
        ) : (
          <div className={styles.noFavorites}>
            <img
              className={styles.noFavoritesImage}
              src="/smile-1.svg"
              width={60}
              height={60}
              alt=""
            />
            <p className={styles.noFavoritesTitle}>Закладок нет :(</p>
            <p className={styles.noFavoritesInfo}>
              Вы ничего не добавляли в закладки
            </p>
            <Link className={styles.noFavoritesButton} to="/">
              <svg
                className={styles.noFavoritesButtonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M14.7144 7L1.00007 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13L1 7L7 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.cartEmptyButtonText}>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;

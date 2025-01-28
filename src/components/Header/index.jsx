import { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import useCartContext from "../../contexts/CartContext";

function Header() {
  const { cartItems, setIsCartOpen } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    
    const price = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <div className={styles.root}>
      <div className={`container ${styles.content}`}>
        <a href="/" className={styles.logoWrapper}>
          <img className={styles.logoIcon} src="/header-logo.svg" alt="" />
          <div className={styles.logoInfo}>
            <h1 className={styles.title}>Scoof Sneakers</h1>
            <h2 className={styles.subTitle}>Магазин лучших кроссовок</h2>
          </div>
        </a>
        <div className={styles.actions}>
          <button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className={styles.actionsButton}
            type="button"
          >
            <img className={styles.actionsIcon} src="/cart-icon.svg" alt="" />
            <span>{totalPrice} руб.</span>
          </button>
          <button className={styles.actionsButton} type="button">
            <img className={styles.actionsIcon} src="/favorite-icon.svg" alt="" />
            <span>Закладки</span>
          </button>
          <button className={styles.actionsButton} type="button">
            <img className={styles.actionsIcon} src="/profile-icon.svg" alt="" />
            <span>Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

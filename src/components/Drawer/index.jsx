import { useEffect } from "react";

import styles from "./Drawer.module.scss";
import Button from "@/components/UI/Button";
import useCartContext from "@/contexts/CartContext";

function Drawer() {
  const {
    cartItems,
    setCartItems,
    getCartItems,
    removeFromCart,
    totalPrice,
    setTotalPrice,
    tax,
    setTax,
    isCartOpen,
    setIsCartOpen,
  } = useCartContext();

  useEffect(() => {
    if (isCartOpen) {
      getCartItems();
    }
  }, [isCartOpen]);

  function onButtonClose(item) {
    
    const updatedCartItems = cartItems.filter(
      (prev) => prev.parentId !== item.parentId
    );

    setCartItems(updatedCartItems);

    const newTotalPrice = updatedCartItems.reduce(
      (totalPrice, currentPrice) => totalPrice + currentPrice.price,
      0
    );

    setTotalPrice(newTotalPrice);
    setTax(newTotalPrice * 0.05);

    removeFromCart(item);
  }

  if (!isCartOpen) {
    return null;
  }

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsCartOpen(false);
        }
      }}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={styles.top}>
          <h2>Корзина</h2>
          <svg
            className={styles.closeIcon}
            onClick={() => setIsCartOpen(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter") setIsCartOpen(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="21px"
            height="21px"
            tabIndex={0}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </div>
        <ul className={styles.items}>
          {cartItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <img src={item.image} width={70} height={70} alt="" />
              <div className={styles.itemInfo}>
                <h3 className={styles.title}>{item.name}</h3>
                <span className={styles.price}>{item.price} руб.</span>
              </div>
              <button
                onClick={() => onButtonClose(item)}
                className={styles.buttonDelete}
                type="button"
              >
                <svg
                  className={styles.iconDelete}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <div className={styles.totalRows}>
            <div className={styles.totalRow}>
              <span className={styles.totalKey}>Итого:</span>
              <span className={styles.totalValue}>{totalPrice} руб.</span>
            </div>
            <div className={styles.totalRow}>
              <span className={styles.totalKey}>Налог 5%:</span>
              <span className={styles.totalValue}>{tax.toFixed(2)} руб.</span>
            </div>
          </div>
          <Button buttonSize="large">
            <span className={styles.totalButtonText}>Оформить заказ</span>
            <svg
              className={styles.iconArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                d="M1 7H14.7143"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

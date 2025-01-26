import styles from "./Drawer.module.scss";
import Button from "@/components/UI/Button";

function Drawer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Корзина</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src="/items/1.jpg" width={70} height={70} alt="" />
            <div className={styles.itemInfo}>
              <h3 className={styles.title}>
                Мужские Кроссовки Nike Air Max 270
              </h3>
              <span className={styles.price}>12 999 руб.</span>
            </div>
            <button className={styles.buttonDelete} type="button">
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
          <li className={styles.item}>
            <img src="/items/1.jpg" width={70} height={70} alt="" />
            <div className={styles.itemInfo}>
              <span className={styles.title}>
                Мужские Кроссовки Nike Air Max 270
              </span>
              <span className={styles.price}>12 999 руб.</span>
            </div>
            <button className={styles.buttonDelete} type="button">
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
          <li className={styles.item}>
            <img src="/items/1.jpg" width={70} height={70} alt="" />
            <div className={styles.itemInfo}>
              <span className={styles.title}>
                Мужские Кроссовки Nike Air Max 270
              </span>
              <span className={styles.price}>12 999 руб.</span>
            </div>
            <button className={styles.buttonDelete} type="button">
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
        </ul>
        <div className={styles.total}>
          <div className={styles.totalRows}>
            <div className={styles.totalRow}>
              <span className={styles.totalKey}>Итого:</span>
              <span className={styles.totalValue}>21 498 руб.</span>
            </div>
            <div className={styles.totalRow}>
              <span className={styles.totalKey}>Налог 5%:</span>
              <span className={styles.totalValue}>1074 руб.</span>
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

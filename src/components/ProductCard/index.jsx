import React from "react";
import styles from "./ProductCard.module.scss";

function ProductCard({ price, name, index }) {
  const [isInCart, setIsInCart] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={`/items/${index}.jpg`} alt="" width={133} height={112} />
        <button
          onClick={() => setIsFavorite((prev) => !prev)}
          className={`${styles.buttonAction} ${isFavorite && styles.isFavorite}`}
          type="button"
        >
          <svg
            className={styles.icon}
            width="14"
            height="12"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_590)">
              <path
                d="M12.9537 0C14.3511 0 15.5249 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20221 17.4812 6.88134C17.2017 7.56047 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92924 16.2574L7.62968 15.1348C6.45588 14.0537 5.58951 13.2568 5.03056 12.744C4.4716 12.2312 3.79388 11.559 2.99737 10.7274C2.20087 9.89582 1.63493 9.2167 1.29956 8.69003C0.96419 8.16336 0.663754 7.56047 0.398252 6.88134C0.132751 6.20221 0 5.53002 0 4.86475C0 3.5065 0.475108 2.35615 1.42532 1.41369C2.37554 0.47123 3.53536 0 4.90479 0C6.52575 0 7.86723 0.623686 8.92924 1.87106C9.99124 0.623686 11.3327 0 12.9537 0ZM9.01308 13.8043C10.3825 12.5846 11.3816 11.6768 12.0105 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10792 15.3642 7.38029 15.6576 6.7566C15.9511 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7973 3.24317 15.1965 2.66106C14.5956 2.07895 13.848 1.7879 12.9537 1.7879C12.2829 1.7879 11.6471 1.98194 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76766 3.86686H8.09081C7.86723 3.25703 7.455 2.75808 6.85413 2.37001C6.25326 1.98194 5.60348 1.7879 4.90479 1.7879C4.01047 1.7879 3.26986 2.07895 2.68296 2.66106C2.09606 3.24317 1.80262 3.97773 1.80262 4.86475C1.80262 5.5023 1.94235 6.13292 2.22183 6.7566C2.5013 7.38029 3.02532 8.10792 3.79388 8.93951C4.56243 9.77109 5.26112 10.4849 5.88994 11.0808C6.51876 11.6768 7.50391 12.5846 8.84539 13.8043L8.92924 13.8874L9.01308 13.8043Z"
                fill="#9B9B9B"
              />
            </g>
          </svg>
        </button>
      </div>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.bottom}>
        <div className={styles.priceWrapper}>
          <span className={styles.priceText}>Цена:</span>
          <span className={styles.price}>{price} руб.</span>
        </div>
        <button
          className={styles.addButton}
          onClick={() => setIsInCart((prev) => !prev)}
          type="button"
          tabIndex={0}
        >
          {isInCart ? (
            <img src="/item-added-icon.svg" alt="" width={32} height={32} />
          ) : (
            <svg
              className={styles.addIcon}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                fill="white"
                stroke="#F2F2F2"
              />
              <path
                d="M20.6653 15.1312H17.2022V11.6682C17.2022 10.3328 15.1312 10.3328 15.1312 11.6682V15.1312H11.668C10.333 15.1312 10.333 17.2022 11.668 17.2022H15.1312V20.6652C15.1312 22.0005 17.2022 22.0005 17.2022 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                fill="#D3D3D3"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import styles from "./Slider.module.scss";
import Button from "@/components/UI/Button";

function Slider() {
  return (
    <section className={`container ${styles.root}`}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src="/adidas-disnep-icon.svg"
          width={80}
          height={80}
          alt=""
        />
        <div className={styles.info}>
          <h2 className={styles.title}>
            <span className={styles.green}>Stan Smith</span>, Forever!
          </h2>
          <Button>Купить</Button>
        </div>
      </div>
      <img
        className={styles.image}
        src="/slider-image-1.jpg"
        width={670}
        height={300}
        alt=""
      />
      <button className={styles.sliderButton} type="button">
        <img src="/next-slide-icon.svg" alt=""></img>
      </button>
    </section>
  );
}

export default Slider;

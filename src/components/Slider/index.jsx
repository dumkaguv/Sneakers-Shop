import { useState, useEffect } from "react";

import styles from "./Slider.module.scss";

function Slider() {
  const slides = [
    {
      id: 1,
      src: "/slider-image-1.jpg",
      alt: "Slide 1",
      text1: "Stan Smith",
      text2: "Forever!",
    },
    {
      id: 2,
      src: "/slider-image-2.jpg",
      alt: "Slide 2",
      text1: "Adidas Run",
      text2: "Forever!",
    },
    {
      id: 3,
      src: "/slider-image-3.jpg",
      alt: "Slide 3",
      text1: "Nike Run",
      text2: "Forever!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  return (
    <section className={`container ${styles.root}`}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            <span className={styles.green}>{slides[currentSlide]?.text1}</span>,{" "}
            {slides[currentSlide]?.text2}
          </h2>
          <a className={styles.sliderButtonBuy} href="#products">
            Купить
          </a>
        </div>
      </div>
      <img
        className={styles.image}
        src={slides[currentSlide].src}
        width={670}
        height={300}
        alt=""
      />

      <button
        onClick={goToPrevSlide}
        className={`${styles.sliderButtonBack} ${styles.sliderButton}`}
        type="button"
      >
        <img width={12} height={7} src="/prev-slide-icon.png" alt=""></img>
      </button>

      <button
        onClick={goToNextSlide}
        className={styles.sliderButton}
        type="button"
      >
        <img src="/next-slide-icon.svg" alt=""></img>
      </button>
    </section>
  );
}

export default Slider;

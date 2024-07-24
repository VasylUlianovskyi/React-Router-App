import { BsArrowsFullscreen } from "react-icons/bs";
import { useState } from "react";
import styles from "./Slider.module.sass";

function Slider({ images }) {
  const [currentImgIndex, setCuttertImgIndex] = useState(0);

  const nextSlide = () => {
    setCuttertImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCuttertImgIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <article className={styles.sliderElement}>
      <div className={styles.slide}>
        <img
          className={styles.slideImg}
          src={images[currentImgIndex]}
          alt={`'Slide'${currentImgIndex}`}
        />
      </div>
      <div className={styles.controlPanel}>
        <button className={styles.controlBtn} onClick={prevSlide}>
          {"<<"}
        </button>
        <button className={styles.controlBtn}>Play</button>
        <button className={styles.controlBtn} onClick={nextSlide}>
          {">>"}
        </button>
        <input
          type="text"
          // value={delay / 1000}
          placeholder="Input time"
        />
        <button className={styles.fullScreenBtn}>
          <BsArrowsFullscreen />
        </button>
      </div>
    </article>
  );
}

export default Slider;

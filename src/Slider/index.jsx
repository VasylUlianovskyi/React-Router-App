import { useEffect, useState } from "react";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import styles from "./Slider.module.sass";

function Slider({ images }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [delay, setDelay] = useState(5000);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isControlPanelVisible, setIsControlPanelVisible] = useState(true);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay);
      return () => clearInterval(interval);
    }
  }, [isPaused, delay, images.length]);

  const handlePlayChange = () => {
    setIsPaused((pause) => !pause);
  };

  const handleInterval = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value <= 0) {
      setDelay(1 * 1000);
    } else {
      setDelay(value * 1000);
    }
  };

  const Image = () =>
    images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className={styles.slideImg}
      />
    ));

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enter full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit full-screen mode:", err);
      });
    }
    setIsFullScreen((e) => !e);
  };

  return (
    <article
      className={`${isFullScreen ? styles.fullscreen : styles.sliderElement}`}
      onMouseEnter={() => setIsControlPanelVisible(true)}
      onMouseLeave={() => setIsControlPanelVisible(false)}
    >
      <div
        className={styles.slide}
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        <Image />
      </div>
      <div
        className={styles.controlPanel}
        style={{ display: isControlPanelVisible ? "flex" : "none" }}
      >
        <button className={styles.controlBtn} onClick={prevSlide}>
          <RxTrackPrevious />
        </button>
        <button className={styles.controlBtn} onClick={handlePlayChange}>
          {isPaused ? <CiPlay1 /> : <CiPause1 />}
        </button>
        <button className={styles.controlBtn} onClick={nextSlide}>
          <RxTrackNext />
        </button>

        <input type="text" value={delay / 1000} onChange={handleInterval} />
        <button
          className={styles.fullScreenBtn}
          onClick={handleFullScreenChange}
        >
          {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
        </button>
      </div>
    </article>
  );
}

export default Slider;

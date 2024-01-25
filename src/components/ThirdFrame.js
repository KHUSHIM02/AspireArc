import { memo, useCallback } from "react";
import styles from "./ThirdFrame.module.css";

const ThirdFrame = memo(() => {
  const onRatingComponentContainerClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  return (
    <section className={styles.thirdFrame}>
      <div className={styles.feedback} data-scroll-to="feedbackContainer">
        <img
          className={styles.whatsappImage20231128At1}
          alt=""
          src="/whatsapp-image-20231128-at-1304-1@2x.png"
        />
        <div className={styles.feedbackText}>
          <h1 className={styles.pleaseProvideYour}>
            PLEASE PROVIDE YOUR FEEDBACK
          </h1>
          <div
            className={styles.ratingComponent}
            onClick={onRatingComponentContainerClick}
          >
            <img
              className={styles.ratingComponentIcon}
              loading="eager"
              alt=""
              src="/star-121.svg"
            />
            <img
              className={styles.ratingComponentIcon1}
              loading="eager"
              alt=""
              src="/star-131.svg"
            />
            <img
              className={styles.ratingComponentIcon2}
              loading="eager"
              alt=""
              src="/star-141.svg"
            />
            <img
              className={styles.ratingComponentIcon3}
              loading="eager"
              alt=""
              src="/star-151.svg"
            />
            <img
              className={styles.ratingComponentIcon4}
              loading="eager"
              alt=""
              src="/star-161.svg"
            />
          </div>
        </div>
        <h2 className={styles.yourOpinionMatters}>
          YOUR OPINION MATTERS TO US
        </h2>
      </div>
    </section>
  );
});

export default ThirdFrame;

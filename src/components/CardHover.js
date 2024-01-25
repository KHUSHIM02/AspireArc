import { memo, useCallback } from "react";
import styles from "./CardHover.module.css";

const CardHover = memo(() => {
  const onWhatsAppImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='exploreMoreAndAboutUs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDesignHeaderContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='coursesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='locationContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrame2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHeaderBarContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='feedbackContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={styles.cardHover}>
      <img className={styles.logoIcon} loading="eager" alt="" src="/logo.svg" />
      <div className={styles.thGradeMathScience}>
        <h1 className={styles.aspireArc}>Aspire Arc</h1>
      </div>
      <div className={styles.skillsNextLevel}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.whatsAppImage} onClick={onWhatsAppImageClick}>
          <div className={styles.about}>About</div>
        </div>
      </div>
      <div className={styles.feedbackSection}>
        <div
          className={styles.designHeader}
          onClick={onDesignHeaderContainerClick}
        >
          <div className={styles.courses}>Courses</div>
        </div>
      </div>
      <div className={styles.unitedIndiaApartment}>
        <div className={styles.contactUsButton}>
          <div className={styles.frameParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.frameParentChild} onClick={onFrameClick} />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.contacts}>Contacts</div>
            <div className={styles.frameParentItem} onClick={onFrame2Click} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.headerBar} onClick={onHeaderBarContainerClick}>
          <div className={styles.feedback}>Feedback</div>
        </div>
      </div>
    </header>
  );
});

export default CardHover;

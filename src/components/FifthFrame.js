import { memo, useCallback } from "react";
import styles from "./FifthFrame.module.css";

const FifthFrame = memo(() => {
  const onGoogleIconClick = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIconClick = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  return (
    <section className={styles.fifthFrame}>
      <div className={styles.fifthFrameChild} />
      <div className={styles.sixthFrame}>
        <div className={styles.parentLocationFrame}>
          <img
            className={styles.design1Icon}
            loading="eager"
            alt=""
            src="/design-11@2x.png"
          />
          <div className={styles.aspireToInspire}>Aspire to Inspire</div>
        </div>
      </div>
      <div className={styles.contactUs}>
        <div className={styles.contactDetails}>
          <div className={styles.parentContactFrame}>
            <div className={styles.unitedIndiaApartments}>
              United India Apartments, Mayur Vihar Extension, New Delhi, Delhi -
              110091
            </div>
            <div className={styles.phoneNo91}>Phone No. +91 8860914596</div>
          </div>
        </div>
        <div className={styles.locationDetails}>
          <b className={styles.followUs}>Follow us :</b>
          <div className={styles.followus}>
            <div className={styles.design}>
              <img
                className={styles.googleIcon}
                alt=""
                src="/google1.svg"
                onClick={onGoogleIconClick}
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/linkedin1.svg"
                onClick={onLinkedinIconClick}
              />
              <img
                className={styles.groupIcon}
                alt=""
                src="/group1.svg"
                onClick={onGroupIconClick}
              />
              <img
                className={styles.githubIcon}
                alt=""
                src="/github1.svg"
                onClick={onGitHubIconClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FifthFrame;

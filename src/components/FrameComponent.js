import { memo, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = memo(() => {
  const onORFILLTHEClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onWhatsAppImage20231128At1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//aspire+arc+mayur+vihar+extension/@28.471966,77.1361956,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5f9b08159a7:0xac394a9f075135fd!2m2!1d77.2963625!2d28.5955646?entry=ttu"
    );
  }, []);

  return (
    <section className={styles.contactUsParent}>
      <div className={styles.contactUs} data-scroll-to="contactUsContainer">
        <img
          className={styles.whatsappImage20231126At1}
          loading="eager"
          alt=""
          src="/whatsapp-image-20231126-at-1114-1@2x.png"
        />
        <h1 className={styles.contactUs1}>Contact us</h1>
        <div className={styles.bookSession}>
          <div className={styles.bookYourFreeContainer}>
            <p className={styles.bookYourFree}>
              Book your free illustration session now !!!
            </p>
            <p className={styles.fillTheForm}>
              {" "}
              Fill the form or call us on +91 8860914595
            </p>
          </div>
          <div className={styles.orFillTheFormWrapper}>
            <h3
              className={styles.orFillTheContainer}
              onClick={onORFILLTHEClick}
            >
              <p className={styles.or}>OR</p>
              <p className={styles.fillTheForm1}>FILL THE FORM</p>
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.location} data-scroll-to="locationContainer">
        <div className={styles.locationInfo}>
          <h2 className={styles.weAreCurrentlyContainer}>
            <p className={styles.weAreCurrentlyLocatedAt}>
              <b>We are currently located at</b>
            </p>
            <p className={styles.unitedIndiaApartmentsMayur}>
              <b>{` `}</b>
              <span>
                United India Apartments, Mayur Vihar Extension, New Delhi, Delhi
                - 110091
              </span>
            </p>
          </h2>
        </div>
        <img
          className={styles.whatsappImage20231128At1}
          loading="eager"
          alt=""
          src="/whatsapp-image-20231128-at-1304-21@2x.png"
          onClick={onWhatsAppImage20231128At1Click}
        />
      </div>
    </section>
  );
});

export default FrameComponent;

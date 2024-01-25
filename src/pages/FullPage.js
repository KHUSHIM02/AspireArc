import CardHover from "../components/CardHover";
import Rectangle from "../components/Rectangle";
import ExploreMoreAndAboutUs from "../components/ExploreMoreAndAboutUs";
import ContactUsFrame from "../components/ContactUsFrame";
import FrameComponent from "../components/FrameComponent";
import ThirdFrame from "../components/ThirdFrame";
import FifthFrame from "../components/FifthFrame";
import styles from "./FullPage.module.css";

const FullPage = () => {
  return (
    <div className={styles.fullPage}>
      <section className={styles.coursesContainer}>
        <div className={styles.courseListing}>
          <CardHover />
          <Rectangle />
        </div>
      </section>
      <div className={styles.text}>
        <div className={styles.headerFrame} />
      </div>
      <ExploreMoreAndAboutUs />
      <ContactUsFrame />
      <FrameComponent />
      <ThirdFrame />
      <FifthFrame />
    </div>
  );
};

export default FullPage;

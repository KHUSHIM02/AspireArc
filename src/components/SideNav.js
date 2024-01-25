import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideNav.module.css";

const SideNav = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onNavItemhomeMobileClick = useCallback(() => {
    // Please sync "Cover" to the project
  }, []);

  const onNavItemhomeMobile1Click = useCallback(() => {
    navigate("/why-aspire-arc");
  }, [navigate]);

  const onNavItemcoursesMobileClick = useCallback(() => {
    // Please sync "COURSEES MOBILE VIEW" to the project
  }, []);

  const onNavItemlocatingMobileClick = useCallback(() => {
    // Please sync "Frame 105" to the project
  }, []);

  const onNavItemcontactsMobileClick = useCallback(() => {
    navigate("/contact-us-mobile-view");
  }, [navigate]);

  const onNavItemfeedbackMobileClick = useCallback(() => {
    // Please sync "FEEDBACK MOBILE VEW" to the project
  }, []);

  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNavItem}>
        <img
          className={styles.phxBoldIcon}
          loading="eager"
          alt=""
          src="/phxbold.svg"
        />
      </div>
      <button
        className={styles.navItemhomeMobile}
        onClick={onNavItemhomeMobileClick}
      >
        <img className={styles.lihomeIcon} alt="" src="/lihome.svg" />
        <div className={styles.home}>Home</div>
      </button>
      <button
        className={styles.navItemhomeMobile1}
        onClick={onNavItemhomeMobile1Click}
      >
        <img className={styles.mysteryIcon} alt="" src="/mystery.svg" />
        <div className={styles.aboutUs}>About Us</div>
      </button>
      <button
        className={styles.navItemcoursesMobile}
        onClick={onNavItemcoursesMobileClick}
      >
        <img className={styles.outlinedIcon} alt="" src="/outlined@2x.png" />
        <div className={styles.courses}>Courses</div>
      </button>
      <button
        className={styles.navItemlocatingMobile}
        onClick={onNavItemlocatingMobileClick}
      >
        <img
          className={styles.mdilocationRadiusIcon}
          alt=""
          src="/mdilocationradius.svg"
        />
        <div className={styles.location}>Location</div>
      </button>
      <button
        className={styles.navItemcontactsMobile}
        onClick={onNavItemcontactsMobileClick}
      >
        <img className={styles.forYouIcon} alt="" src="/for-you.svg" />
        <div className={styles.contacts}>Contacts</div>
      </button>
      <button
        className={styles.navItemfeedbackMobile}
        onClick={onNavItemfeedbackMobileClick}
      >
        <img
          className={styles.uilcommentAltNotesIcon}
          alt=""
          src="/uilcommentaltnotes.svg"
        />
        <div className={styles.feedback}>Feedback</div>
      </button>
    </div>
  );
});

export default SideNav;

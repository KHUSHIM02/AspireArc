import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Rectangle.module.css";

const Rectangle = memo(() => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/explore-more-and-about-us");
  }, [navigate]);

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
    <div className={styles.rectangle}>
      <div className={styles.text}>
        <div className={styles.group}>
          <div className={styles.rectangle1}>
            <div className={styles.line}>
              <div className={styles.headline}>
                <div className={styles.text1}>
                  <div className={styles.theDesignThinkingContainer}>
                    <p className={styles.aspire}>{`Aspire `}</p>
                    <p className={styles.toInspire}>
                      <span>To</span>
                      <span className={styles.span}>{`   `}</span>
                      <span className={styles.inspire}>Inspire</span>
                    </p>
                    <p className={styles.unleashYourBrilliance}>
                      Unleash Your Brilliance
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.rectangle2}>
                <div className={styles.button} onClick={onButtonContainerClick}>
                  <div className={styles.getStarted}>Explore More ...</div>
                </div>
              </div>
            </div>
            <div className={styles.group1}>
              <b className={styles.followUs}>Follow us :</b>
            </div>
          </div>
        </div>
        <div className={styles.studentImteractionImage}>
          <img
            className={styles.hardWorkingCharactersPngTr}
            loading="eager"
            alt=""
            src="/hard-working-characters-png-transparent-hard-working-english-four-or-six-girls-character-design-girl-c-11@2x.png"
          />
        </div>
      </div>
      <div className={styles.star}>
        <div className={styles.text2}>
          <img
            className={styles.googleIcon}
            loading="eager"
            alt=""
            src="/google1.svg"
            onClick={onGoogleIconClick}
          />
          <img
            className={styles.linkedinIcon}
            loading="eager"
            alt=""
            src="/linkedin1.svg"
            onClick={onLinkedinIconClick}
          />
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group1.svg"
            onClick={onGroupIconClick}
          />
          <img
            className={styles.githubIcon}
            loading="eager"
            alt=""
            src="/github1.svg"
            onClick={onGitHubIconClick}
          />
        </div>
      </div>
    </div>
  );
});

export default Rectangle;

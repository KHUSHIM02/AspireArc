import { useState, useCallback } from "react";
import SideNav from "../components/SideNav";
import PortalPopup from "../components/PortalPopup";
import FormContainer from "../components/FormContainer";
import styles from "./MOBILEVIEW.module.css";

const MOBILEVIEW = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const openSideNav = useCallback(() => {
    setSideNavOpen(true);
  }, []);

  const closeSideNav = useCallback(() => {
    setSideNavOpen(false);
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whyAspireArc']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  const onORFILLTHEClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onWhatsAppImage20231128At1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//aspire+arc+mayur+vihar+extension/@28.471966,77.1361956,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5f9b08159a7:0xac394a9f075135fd!2m2!1d77.2963625!2d28.5955646?entry=ttu"
    );
  }, []);

  const onRatingComponentContainerClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onGoogleIcon1Click = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIcon1Click = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIcon2Click = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  return (
    <>
      <div className={styles.mobileView}>
        <header className={styles.frameRoot}>
          <div className={styles.cardHoversParent}>
            <button className={styles.thMathScienceSection}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.aspireArc}>Aspire Arc</div>
            </button>
            <div className={styles.feedbackRating}>
              <img
                className={styles.materialSymbolsmenuRoundedIcon}
                loading="eager"
                alt=""
                src="/materialsymbolsmenurounded.svg"
                onClick={openSideNav}
              />
            </div>
          </div>
        </header>
        <div className={styles.orFillTheFormButton}>
          <img
            className={styles.githubIcon}
            loading="eager"
            alt=""
            src="/github.svg"
            onClick={onGitHubIconClick}
          />
          <div className={styles.groupContainer}>
            <h2 className={styles.theDesignThinkingContainer}>
              <p className={styles.aspire}>{`Aspire `}</p>
              <p className={styles.to}>To Inspire</p>
            </h2>
            <div className={styles.googleLinkedinGroupGitHub}>
              <img
                className={styles.hardWorkingCharactersPngTr}
                loading="eager"
                alt=""
                src="/hard-working-characters-png-transparent-hard-working-english-four-or-six-girls-character-design-girl-c-1@2x.png"
              />
            </div>
            <div className={styles.theDesignThinkingWrapper}>
              <div className={styles.theDesignThinking}>
                Unleash Your Brilliance
              </div>
            </div>
            <div className={styles.groupContainerInner}>
              <div className={styles.buttonParent}>
                <div className={styles.button} onClick={onButtonContainerClick}>
                  <div className={styles.rectangle} />
                  <div className={styles.getStarted}>Explore More ...</div>
                </div>
                <div className={styles.followUsButtonWrapper}>
                  <div className={styles.followUsButton}>
                    <b className={styles.followUs}>Follow us :</b>
                    <div className={styles.followUsButtonInner}>
                      <div className={styles.googleParent}>
                        <img
                          className={styles.googleIcon}
                          loading="eager"
                          alt=""
                          src="/google.svg"
                          onClick={onGoogleIconClick}
                        />
                        <img
                          className={styles.linkedinIcon}
                          loading="eager"
                          alt=""
                          src="/linkedin.svg"
                          onClick={onLinkedinIconClick}
                        />
                        <img
                          className={styles.groupIcon}
                          loading="eager"
                          alt=""
                          src="/group.svg"
                          onClick={onGroupIconClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className={styles.formFillCallToAction}>
          <div className={styles.formFillCallToActionChild} />
          <FormContainer />
          <div className={styles.privacyPolicy}>
            <h2 className={styles.courses}>Courses</h2>
          </div>
          <section className={styles.locationText}>
            <div className={styles.cardHovers}>
              <div className={styles.card} />
            </div>
            <img
              className={styles.untitledDesign91}
              loading="eager"
              alt=""
              src="/untitled-design-9-1@2x.png"
            />
            <div className={styles.th10thGradeMathsSciencParent}>
              <div
                className={styles.th10th}
              >{`9th & 10th Grade: Maths, Science`}</div>
              <div className={styles.immerseYourselfInContainer}>
                <p className={styles.immerseYourselfIn}>
                  Immerse yourself in the world of numbers and equations, and
                  unravel the secrets of science. Our engaging courses make
                  learning math and science an exciting adventure!
                </p>
              </div>
            </div>
          </section>
          <section className={styles.locationText1}>
            <div className={styles.cardHovers1}>
              <div className={styles.card1} />
            </div>
            <img
              className={styles.untitledDesign101}
              loading="eager"
              alt=""
              src="/untitled-design-10-1@2x.png"
            />
            <div className={styles.th12thGradeComputerScieParent}>
              <div
                className={styles.th12th}
              >{`11th & 12th Grade:  Computer Science(Python)`}</div>
              <div className={styles.stepIntoThe}>
                Step into the digital realm and explore the limitless
                possibilities of computer science. From coding to cutting-edge
                technologies, we prepare you for the tech-driven world ahead.
              </div>
            </div>
          </section>
          <section className={styles.untitledDesignRectangle}>
            <div className={styles.cardHovers2}>
              <div className={styles.card2} />
            </div>
            <img
              className={styles.untitledDesign111}
              loading="eager"
              alt=""
              src="/untitled-design-11-1@2x.png"
            />
            <div className={styles.introducingMachineLearning}>
              {" "}
              Introducing Machine Learning: Where Innovation Meets Intelligence
            </div>
            <div className={styles.takeYourSkills}>
              Take your skills to the next level with our Machine Learning
              course. Dive into the world of artificial intelligence and
              discover the magic of machines that learn and adapt.
            </div>
          </section>
          <div className={styles.frameSection}>
            <div className={styles.cardHoversGroup}>
              <div className={styles.cardHovers3}>
                <div className={styles.card3} />
              </div>
              <img
                className={styles.untitledDesign112}
                loading="eager"
                alt=""
                src="/untitled-design-11-2@2x.png"
              />
            </div>
            <div className={styles.personalizedCounselling}>
              <div className={styles.personalizedCounsellingSessi}>
                Personalized Counselling Sessions
              </div>
              <div className={styles.embarkOnA}>
                Embark on a journey of self-discovery and professional
                fulfillment with our personalized Career Counseling Sessions.
                Unveil your true potential, navigate career crossroads, and
                sculpt a path that aligns with your passions.
              </div>
            </div>
          </div>
          <section className={styles.contactUsMobileView}>
            <div className={styles.contactUsMobileView1}>
              <img
                className={styles.whatsappImage20231126At1}
                alt=""
                src="/whatsapp-image-20231126-at-1114-1@2x.png"
              />
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.bookYourFreeIllustrationSe}>
                <div className={styles.bookYourFreeContainer}>
                  <p className={styles.bookYourFree}>
                    Book your free illustration session now !!!
                  </p>
                  <p className={styles.fillTheForm}>
                    {" "}
                    Fill the form or call us on +91 8860914595
                  </p>
                </div>
                <div
                  className={styles.orFillTheContainer}
                  onClick={onORFILLTHEClick}
                >
                  <p className={styles.or}>OR</p>
                  <p className={styles.fillTheForm1}>FILL THE FORM</p>
                </div>
              </div>
            </div>
            <div className={styles.locationCard}>
              <h2 className={styles.location}>LOCATION</h2>
            </div>
            <img
              className={styles.whatsappImage20231128At1}
              loading="eager"
              alt=""
              src="/whatsapp-image-20231128-at-1304-2@2x.png"
              onClick={onWhatsAppImage20231128At1Click}
            />
            <div className={styles.backgroundRectangle}>
              <div className={styles.weAreCurrentlyLocatedAt}>
                <div className={styles.unitedIndiaApt}>
                  <div className={styles.weAreCurrentlyContainer}>
                    <p className={styles.weAreCurrentlyLocatedAt1}>
                      <b>We are currently located at</b>
                    </p>
                    <p className={styles.unitedIndiaApartmentsMayur}>
                      <b>{` `}</b>
                      <span>
                        United India Apartments, Mayur Vihar Extension, New
                        Delhi, Delhi - 110091
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.groupFrame}>
                  <img
                    className={styles.whatsappImage20231128At11}
                    alt=""
                    src="/whatsapp-image-20231128-at-1304-1@2x.png"
                  />
                  <div className={styles.pleaseProvideYourFeedback}>
                    <div className={styles.pleaseProvideYour}>
                      PLEASE PROVIDE YOUR FEEDBACK
                    </div>
                  </div>
                  <div className={styles.yourOpinionMattersToUs}>
                    <div className={styles.starInstances}>
                      <div
                        className={styles.ratingComponent}
                        onClick={onRatingComponentContainerClick}
                      >
                        <img
                          className={styles.frameNodeIcon}
                          loading="eager"
                          alt=""
                          src="/star-12.svg"
                        />
                        <img
                          className={styles.frameNodeIcon1}
                          loading="eager"
                          alt=""
                          src="/star-13.svg"
                        />
                        <img
                          className={styles.frameNodeIcon2}
                          loading="eager"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className={styles.frameNodeIcon3}
                          loading="eager"
                          alt=""
                          src="/star-15.svg"
                        />
                        <img
                          className={styles.frameNodeIcon4}
                          loading="eager"
                          alt=""
                          src="/star-16.svg"
                        />
                      </div>
                      <div className={styles.yourOpinionMatters}>
                        YOUR OPINION MATTERS TO US
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.groupNode}>
            <div className={styles.designRectangle}>
              <img
                className={styles.design1Icon}
                loading="eager"
                alt=""
                src="/design-1@2x.png"
              />
              <div className={styles.rectangleNode}>
                <div className={styles.groupNode1}>
                  <div className={styles.textNode}>
                    <div className={styles.unitedIndiaApartments}>
                      United India Apartments, Mayur Vihar Extension, New Delhi,
                      Delhi - 110091
                    </div>
                    <img
                      className={styles.textNodeChild}
                      alt=""
                      src="/group-302.svg"
                    />
                  </div>
                  <div className={styles.phoneNoFrame}>
                    <img
                      className={styles.phoneNoFrameChild}
                      alt=""
                      src="/group-218.svg"
                    />
                    <div className={styles.phoneNo918860914596}>
                      Phone No. +918860914596
                    </div>
                  </div>
                </div>
                <b className={styles.followUs1}>Follow us :</b>
              </div>
            </div>
            <div className={styles.socialMediaLinks}>
              <div className={styles.groupFrames}>
                <img
                  className={styles.googleIcon1}
                  alt=""
                  src="/google.svg"
                  onClick={onGoogleIcon1Click}
                />
                <img
                  className={styles.linkedinIcon1}
                  alt=""
                  src="/linkedin.svg"
                  onClick={onLinkedinIcon1Click}
                />
                <img
                  className={styles.groupIcon1}
                  alt=""
                  src="/group.svg"
                  onClick={onGroupIcon1Click}
                />
                <img
                  className={styles.githubIcon1}
                  alt=""
                  src="/github.svg"
                  onClick={onGitHubIcon2Click}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      {isSideNavOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSideNav}
        >
          <SideNav onClose={closeSideNav} />
        </PortalPopup>
      )}
    </>
  );
};

export default MOBILEVIEW;

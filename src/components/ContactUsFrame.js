import { memo } from "react";
import styles from "./ContactUsFrame.module.css";

const ContactUsFrame = memo(() => {
  return (
    <section className={styles.contactUsFrame}>
      <div className={styles.courses} data-scroll-to="coursesContainer">
        <div className={styles.mathScienceCard}>
          <h1 className={styles.courses1}>Courses</h1>
        </div>
        <div className={styles.thirdGradeMaths}>
          <div className={styles.personalizedCounselling}>
            <div className={styles.cardHoversFrame}>
              <div className={styles.thMathGradeCS}>
                <div className={styles.cardHovers}>
                  <div className={styles.card} />
                </div>
                <img
                  className={styles.untitledDesign91}
                  loading="eager"
                  alt=""
                  src="/untitled-design-9-11@2x.png"
                />
                <div className={styles.machineLearningIntro}>
                  <div
                    className={styles.th10th}
                  >{`9th & 10th Grade: Maths, Science`}</div>
                  <div className={styles.immerseYourselfInContainer}>
                    <p className={styles.immerseYourselfIn}>
                      Immerse yourself in the world of numbers and equations,
                      and unravel the secrets of science. Our engaging courses
                      make learning math and science an exciting adventure!
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.bookFreeSession}>
                <div className={styles.cardHovers1}>
                  <div className={styles.card1} />
                </div>
                <img
                  className={styles.untitledDesign101}
                  loading="eager"
                  alt=""
                  src="/untitled-design-10-11@2x.png"
                />
                <div className={styles.contactUsFrame1}>
                  <div className={styles.computerScienceSession}>
                    <div
                      className={styles.th12th}
                    >{`11th & 12th Grade:  Computer Science(Python)`}</div>
                    <div className={styles.stepIntoThe}>
                      Step into the digital realm and explore the limitless
                      possibilities of computer science. From coding to
                      cutting-edge technologies, we prepare you for the
                      tech-driven world ahead.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardHoversFrame1}>
              <div className={styles.cardHoversParent}>
                <div className={styles.cardHovers2}>
                  <div className={styles.card2} />
                </div>
                <img
                  className={styles.untitledDesign111}
                  loading="eager"
                  alt=""
                  src="/untitled-design-11-11@2x.png"
                />
                <div className={styles.introducingMachineLearningIParent}>
                  <div className={styles.introducingMachineLearning}>
                    {" "}
                    Introducing Machine Learning Innovation Meets Intelligence
                  </div>
                  <div className={styles.takeYourSkills}>
                    Take your skills to the next level with our Machine Learning
                    course. Dive into the world of artificial intelligence and
                    discover the magic of machines that learn and adapt.
                  </div>
                </div>
              </div>
              <div className={styles.cardHoversGroup}>
                <div className={styles.cardHovers3}>
                  <div className={styles.card3} />
                </div>
                <img
                  className={styles.untitledDesign112}
                  loading="eager"
                  alt=""
                  src="/untitled-design-11-21@2x.png"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.personalizedCounsellingSessiParent}>
                    <div className={styles.personalizedCounsellingSessi}>
                      Personalized Counselling Sessions
                    </div>
                    <div className={styles.embarkOnA}>
                      Embark on a journey of self-discovery and professional
                      fulfillment with our personalized Career Counseling
                      Sessions. Unveil your true potential, navigate career
                      crossroads, and sculpt a path that aligns with your
                      passions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactUsFrame;

import { memo } from "react";
import ThGradeMathsScience from "./ThGradeMathsScience";
import styles from "./ExploreMoreAndAboutUs.module.css";

const ExploreMoreAndAboutUs = memo(() => {
  return (
    <section
      className={styles.exploreMoreAndAboutUs}
      data-scroll-to="exploreMoreAndAboutUs"
    >
      <div className={styles.coursesFrame}>
        <div className={styles.cardHovers}>
          <h2 className={styles.whyAspireArc}>Why Aspire Arc?</h2>
        </div>
      </div>
      <ThGradeMathsScience
        coffees01="/coffees011@2x.png"
        supportiveFaculty="Supportive Faculty"
        aspireArcValuesAHolisticA="Aspire Arc values a holistic approach to education, understanding that students may not always excel in academics but should possess a clear understanding of both academic concepts and life skills."
        theFacultyAtAspireArcIsCo="The faculty at Aspire Arc is committed to providing support and guidance to students, fostering an environment where learning is not solely focused on grades but on overall comprehension and personal growth."
        propPadding="0px 1px"
        propGap="64px"
        propWidth="501px"
        propMinWidth="375px"
        propGap1="37px"
        propHeight="200px"
      />
      <div className={styles.embarkOnAJourneyOfSelfDi}>
        <div className={styles.frameParent}>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.whatsAppImage}>
                <div className={styles.rectangle}>
                  <h2 className={styles.interactiveLearning}>
                    Interactive Learning
                  </h2>
                </div>
                <div className={styles.classesAtAspireContainer}>
                  <p className={styles.classesAtAspire}>
                    Classes at Aspire Arc are designed to be lively and
                    interactive, encouraging student engagement and
                    participation.
                  </p>
                  <p className={styles.theEmphasisOn}>
                    The emphasis on discussions promotes a deeper understanding
                    of the subjects, allowing students to actively contribute to
                    the learning process.
                  </p>
                </div>
              </div>
            </div>
            <img
              className={styles.coffees01Icon}
              alt=""
              src="/coffees01-11@2x.png"
            />
          </div>
          <div className={styles.headerFrame}>
            <ThGradeMathsScience
              coffees01="/coffees01-21@2x.png"
              supportiveFaculty="Flexible Schedules"
              aspireArcValuesAHolisticA="Recognizing the challenges some students face in attending classes on weekdays, Aspire Arc provides flexibility with weekend batches."
              theFacultyAtAspireArcIsCo="This allows students with other commitments or scheduling constraints to still access quality education and engage in the learning process."
              propPadding="unset"
              propGap="56px"
              propWidth="488px"
              propMinWidth="380px"
              propGap1="37px"
              propHeight="190px"
            />
            <div className={styles.text}>
              <div className={styles.cardHover}>
                <div className={styles.untitledDesign}>
                  <div className={styles.frameGroup}>
                    <div className={styles.realWorldApplicationsWrapper}>
                      <h3 className={styles.realWorldApplications}>
                        Real-world Applications
                      </h3>
                    </div>
                    <div className={styles.aspireArcBelievesContainer}>
                      <p className={styles.aspireArcBelieves}>
                        Aspire Arc believes in the practical application of
                        theoretical knowledge. Students are not only exposed to
                        academic concepts but also learn how these concepts are
                        applied in real-world scenarios.
                      </p>
                      <p className={styles.thisApproachEnsures}>
                        This approach ensures that students not only grasp the
                        theoretical foundations of their subjects but also
                        understand their relevance in practical situations.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.coffees01Icon1}
                  alt=""
                  src="/coffees01-31@2x.png"
                />
              </div>
              <ThGradeMathsScience
                coffees01="/coffees01-41@2x.png"
                supportiveFaculty="Guidance for the Future"
                aspireArcValuesAHolisticA="Aspire Arc goes beyond traditional education by providing guidance on future career paths and university choices."
                theFacultyAtAspireArcIsCo="Students benefit from insights that help them make informed decisions about their educational and professional journeys, ensuring they are well-prepared for the challenges that lie ahead."
                propPadding="unset"
                propGap="57px"
                propWidth="468px"
                propMinWidth="378px"
                propGap1="57px"
                propHeight="183px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExploreMoreAndAboutUs;

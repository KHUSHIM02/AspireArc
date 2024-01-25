import { memo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = memo(() => {
  return (
    <section className={styles.starRating}>
      <div className={styles.whyAspireArc} data-scroll-to="whyAspireArc">
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.whyAspireArcWrapper}>
              <div className={styles.whyAspireArc1}>Why Aspire Arc?</div>
            </div>
          </div>
          <div className={styles.supportiveFaculty}>
            <div className={styles.supportiveFaculty1}>Supportive Faculty</div>
          </div>
          <img
            className={styles.coffees01Icon}
            loading="eager"
            alt=""
            src="/coffees01@2x.png"
          />
          <div className={styles.aspireArcValues}>
            Aspire Arc values a holistic approach to education, understanding
            that students may not always excel in academics but should possess a
            clear understanding of both academic concepts and life skills. The
            faculty at Aspire Arc is committed to providing support and guidance
            to students, fostering an environment where learning is not solely
            focused on grades but on overall comprehension and personal growth.
          </div>
        </div>
        <div className={styles.machineLevelsUp}>
          <div className={styles.interactiveLearning}>Interactive Learning</div>
          <img
            className={styles.coffees01Icon1}
            alt=""
            src="/coffees01-1@2x.png"
          />
        </div>
        <div className={styles.googleLinkedinGroupGitHub}>
          <div className={styles.classesAtAspireContainer}>
            <p className={styles.classesAtAspire}>
              Classes at Aspire Arc are designed to be lively and interactive,
              encouraging student engagement and participation.
            </p>
            <p className={styles.theEmphasisOn}>
              The emphasis on discussions promotes a deeper understanding of the
              subjects, allowing students to actively contribute to the learning
              process.
            </p>
          </div>
        </div>
        <div className={styles.locationInfo}>
          <div className={styles.flexibleSchedules}>Flexible Schedules</div>
        </div>
        <div className={styles.feedbackForm}>
          <img
            className={styles.coffees01Icon2}
            alt=""
            src="/coffees01-2@2x.png"
          />
        </div>
        <div className={styles.googleLinkedinGroupGitHub1}>
          <div className={styles.recognizingTheChallenges}>
            Recognizing the challenges some students face in attending classes
            on weekdays, Aspire Arc provides flexibility with weekend batches.
            This allows students with other commitments or scheduling
            constraints to still access quality education and engage in the
            learning process.
          </div>
        </div>
        <div className={styles.googleLinkedinGroupGithub}>
          <div className={styles.realWorldApplications}>
            Real-world Applications
          </div>
          <img
            className={styles.coffees01Icon3}
            alt=""
            src="/coffees01-3@2x.png"
          />
          <div className={styles.aspireArcBelieves}>
            Aspire Arc believes in the practical application of theoretical
            knowledge. Students are not only exposed to academic concepts but
            also learn how these concepts are applied in real-world scenarios.
            This approach ensures that students not only grasp the theoretical
            foundations of their subjects but also understand their relevance in
            practical situations.
          </div>
        </div>
        <div className={styles.followUs}>
          <div className={styles.guidanceForThe}>Guidance for the Future</div>
          <img
            className={styles.coffees01Icon4}
            alt=""
            src="/coffees01-4@2x.png"
          />
        </div>
        <div className={styles.aspireArcGoes}>
          Aspire Arc goes beyond traditional education by providing guidance on
          future career paths and university choices. Students benefit from
          insights that help them make informed decisions about their
          educational and professional journeys, ensuring they are well-prepared
          for the challenges that lie ahead.
        </div>
      </div>
    </section>
  );
});

export default FormContainer;

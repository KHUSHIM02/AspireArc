import { memo, useMemo } from "react";
import styles from "./ThGradeMathsScience.module.css";

const ThGradeMathsScience = memo(
  ({
    coffees01,
    supportiveFaculty,
    aspireArcValuesAHolisticA,
    theFacultyAtAspireArcIsCo,
    propPadding,
    propGap,
    propWidth,
    propMinWidth,
    propGap1,
    propHeight,
  }) => {
    const thGradeMathsScienceStyle = useMemo(() => {
      return {
        padding: propPadding,
        gap: propGap,
      };
    }, [propPadding, propGap]);

    const coffees01IconStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const takeYourSkillsToTheNextLStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const thGradeComputerSciencePythStyle = useMemo(() => {
      return {
        gap: propGap1,
      };
    }, [propGap1]);

    const aspireArcValuesContainerStyle = useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

    return (
      <div
        className={styles.thGradeMathsScience}
        style={thGradeMathsScienceStyle}
      >
        <img
          className={styles.coffees01Icon}
          loading="eager"
          alt=""
          src={coffees01}
          style={coffees01IconStyle}
        />
        <div
          className={styles.takeYourSkillsToTheNextL}
          style={takeYourSkillsToTheNextLStyle}
        >
          <div
            className={styles.thGradeComputerSciencePyth}
            style={thGradeComputerSciencePythStyle}
          >
            <div className={styles.personalizedCounsellingSessi}>
              <h2 className={styles.supportiveFaculty}>{supportiveFaculty}</h2>
            </div>
            <div
              className={styles.aspireArcValuesContainer}
              style={aspireArcValuesContainerStyle}
            >
              <p className={styles.aspireArcValues}>
                {aspireArcValuesAHolisticA}
              </p>
              <p className={styles.theFacultyAt}>{theFacultyAtAspireArcIsCo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ThGradeMathsScience;

import React from "react";
import styles from "./Solutions.module.scss";

const Solutions = () => {
  return (
    <div className={styles.parentBlock}>
      <div className={styles.container}>
        <div className={styles.slutionsBlock}>
          <div className={styles.block1}>
            <img src="images/solutions/solutions1.jpg" alt="" />
          </div>
          <div className={styles.block2}>
            <h2>Solutions</h2>
            <p>
              Solutions designed to support you at every step of your journey.
              Alivio provides a set of simple but powerful tools to help you
              manage stress. From guided journals to mood tracking and daily
              prompts, everything is built to support your personal growth.
            </p>
          </div>
        </div>
        <div className={styles.aboutBlock}>
          <p>
            Track your emotions, reflect on your day, and receive personalized
            suggestions that help you better understand yourself and improve
            your mental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

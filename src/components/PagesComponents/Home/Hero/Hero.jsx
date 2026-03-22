import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.container}>
        <div className={styles.heroBlock}>
          <h1>Be aware, Manage well.</h1>
          <p>
            Everyone experiences stress in different ways. Let Alivio guide you,
            in a personalized journal experience, to overcome your stress.
          </p>
          <button>Find Your Way</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

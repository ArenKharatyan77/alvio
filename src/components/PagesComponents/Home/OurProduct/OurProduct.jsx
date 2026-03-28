import React from "react";
import styles from "./OurProduct.module.scss";
const OurProduct = () => {
  return (
    <section className={styles.sectionProduct}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.imageBlock}>
            <img
              className={styles.imageBlock1}
              src="images/home/person.png"
              alt=""
            />
            <div className={styles.customizedBlock}>
              <div className={styles.block1}>
                <p>Customized For</p>
                <div className={styles.image}>
                  <img src="images/home/circleImg.png " alt="" />
                </div>
                <span>Mikayla</span>
              </div>
              <div className={styles.block2}>
                <p>Your custom contents</p>
                <ul>
                  <li>• Understand Your Stress</li>
                  <li>• Anger Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <p>Our product</p>
            <h2>You tell us your stress, We make your diary</h2>
            <p>
              Everyone experiences it, and in different ways. Let Alivio guide
              you, in a personalized journal experience, to overcome your
              stress.
            </p>
            <button>Find Your Way</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

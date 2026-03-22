import React from "react";
import styles from "./OurProduct.module.scss";
const OurProduct = () => {
  return (
    <section className={styles.sectionProduct}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.imageBlock}>
            <img src="images/home/person.png" alt="" />
            <div className={styles.customizedBlock}>
              <div className={styles.block1}>
                <p></p>
                <div className={styles.image}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.block2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

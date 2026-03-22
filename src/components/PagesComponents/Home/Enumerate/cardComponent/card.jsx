import React from "react";
import styles from "./card.module.scss";

const Card = ({ num, title, src, children, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={styles.relativeBlock}>
        <span>{num}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.aboutBlock}>
        <p>{children}</p>
      </div>
      <div className={styles.imageBlock}>
        <img src={src} alt="image" />
      </div>
    </div>
  );
};

export default Card;

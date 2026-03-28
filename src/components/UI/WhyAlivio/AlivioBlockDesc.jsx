import React from 'react'
import styles from "./AlivioBlockDesc.module.scss";

const AlivioBlockDesc = ({ src, desc, reverse }) => {
  return (
    <div className={`${styles.parenBlock} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.imagesBlock}>
            <img src={src} alt="" />
        </div>
        <div className={styles.descBlock}>
            <h2>Why Alivio</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default AlivioBlockDesc;
import React from "react";
import styles from "./AlivioBlock.module.scss";
import AlivioBlockDesc from "../../../UI/WhyAlivio/AlivioBlockDesc";

const desc = [
  {
    id: 1,
    src: "images/whyAlivio/alivio1.jpg",
    desc: "Why Alivio helps you take control of your stress and emotions in a simple, natural way.",
  },
  {
    id: 2,
    src: "images/whyAlivio/alivio2.jpg",
    desc: "Alivio is designed to help you understand your emotions, identify stress triggers, and build healthy daily habits. Using guided journaling and simple techniques, you can gradually improve your mental well-being and feel more in control of your life",
  },
  {
    id: 3,
    src: "images/whyAlivio/alivio3.jpg",
    desc: "Our approach is based on self-awareness, consistency, and small daily improvements that lead to long-term results.",
  },
];

const AlivioBlock = () => {
  return (
    <div className={styles.parentBlock}>
      <div className={styles.container}>
        {desc.map((item, index) => (
            <AlivioBlockDesc key={item.id} src={item.src} desc={item.desc} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default AlivioBlock;

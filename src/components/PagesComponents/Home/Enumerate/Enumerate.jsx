import React from "react";
import styles from "./Enumerate.module.scss";
import Card from "./cardComponent/card";

const data = [
  {
    num: "01",
    title: "Personalize",
    text: "Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on.",
    src: "/images/home/img1.png",
  },
  {
    num: "02",
    title: "Write & Understand",
    text: "Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!",
    src: "/images/home/img2.png",
  },
  {
    num: "03",
    title: "Alivio!",
    text: "Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!",
    src: "/images/home/img3.png",
  },
];

const Enumerate = () => {
  return (
    <section className={styles.enumerateSection}>
      <div className={styles.container}>
        <p>How it works</p>
        <div className={styles.aboutEnumerate}>
          <h2>Understand & Release the stress in 3 steps</h2>
          <p>
            Alivio offers as many journals it takes, tackling different areas
            such as anxiety, overwhelmedness, sadness, or anger, and a variety
            of personal causes, to help you become aware of your emotions, and
            guide you in how to manage stress.
          </p>
        </div>
        <div className={styles.numerate}>
            {data.map((item, index) => (
              <Card
                key={index}
                num={item.num}
                title={item.title}
                src={item.src}
                className={index === 1 ? styles.cardOffset : ""}
              >
                {item.text}
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Enumerate;

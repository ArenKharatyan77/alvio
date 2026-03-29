import React from "react";
import styles from "./CommunityBlock.module.scss";
import AlivioBlockDesc from "../../../UI/WhyAlivio/AlivioBlockDesc";



const desc = [
  {
    id: 1,
    src: "images/community/community1.jpg",
    desc: "Whether you want to speak openly or just read and learn, Alivio gives you a space where you can feel understood and supported.",
  },
  {
    id: 2,
    src: "images/community/community2.jpg",
    desc: "Join a supportive community of people who are also working on improving their mental well-being. Share your experiences, learn from others, and grow together in a safe and positive environment.",
  },
  {
    id: 3,
    src: "images/community/community3.jpg",
    desc: "Whether you want to speak openly or just read and learn, Alivio gives you a space where you can feel understood and supported.",
  },
];



const CommunityBlock = () => {
  return (
    <div className={styles.parentBlock}>
      <div className={styles.container}>
        {desc.map((item, index) => (
          <AlivioBlockDesc
            key={item.id}
            src={item.src}
            desc={item.desc}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityBlock;

import React from "react";
import styles from "./VideoBlock.module.scss";

const VideoBlock = () => {
  return (
    <section className={styles.sectionBack}>
      <div className={styles.container}>
        <div className={styles.aboutBlock}>
          <h3>Let's hear about Kayla's success story</h3>
          <p>See how well Alivio works in a real customer’s life. </p>
          <button>Let’s get started</button>
        </div>
        <div className={styles.videoBlock}>
          <video controls width="600" poster="/images/home/video.png">
            <source src="video/home/alivio.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;

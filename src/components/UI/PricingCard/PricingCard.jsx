import styles from "./PricingCard.module.scss";

const PricingCard = ({ price, title, features, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.priceBlock} style={{ backgroundColor: color }}>
        <span className={styles.price}>${price}</span>
        <span className={styles.period}>
          per
          <br />
          month
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.features}>
        {features.map((item, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={item.available ? styles.check : styles.cross}>
              {item.available ? "✓" : "✕"}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
      <button className={styles.btn} style={{ backgroundColor: color }}>
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;

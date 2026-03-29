import styles from "./PricingBlock.module.scss";
import PricingCard from '../../../UI/PricingCard/PricingCard';

const plans = [
  {
    price: 19,
    title: "Basic",
    color: "#f5a623",
    features: [
      { text: "Sample Text Here", available: true },
      { text: "Other Text Title", available: false },
      { text: "Text Space Goes Here", available: false },
      { text: "Description Space", available: false },
      { text: "Sample Text Here", available: false },
    ],
  },
  {
    price: 29,
    title: "Standard",
    color: "#1a8fa0",
    features: [
      { text: "Sample Text Here", available: true },
      { text: "Other Text Title", available: true },
      { text: "Text Space Goes Here", available: true },
      { text: "Description Space", available: false },
      { text: "Sample Text Here", available: false },
    ],
  },
  {
    price: 39,
    title: "Premium",
    color: "#555",
    features: [
      { text: "Sample Text Here", available: true },
      { text: "Other Text Title", available: true },
      { text: "Text Space Goes Here", available: true },
      { text: "Description Space", available: true },
      { text: "Sample Text Here", available: true },
    ],
  },
];

const PricingBlock = () => {
  return (
    <div className={styles.parentBlock}>
      <div className={styles.container}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;

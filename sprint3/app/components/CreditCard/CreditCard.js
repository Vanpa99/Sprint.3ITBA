// app/components/CreditCard/CreditCard.js
import styles from "./CreditCard.module.css";

export default function CreditCard({
  cardNumber,
  cardHolder,
  expiryDate,
  type = "default",
}) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.cardHeader}>
        <div className={styles.chip}></div>
        <span className={styles.cardType}>{type.toUpperCase()}</span>
      </div>

      <div className={styles.cardNumber}>
        {cardNumber.match(/.{1,4}/g)?.join(" ") || "•••• •••• •••• ••••"}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.cardHolder}>
          <span className={styles.label}>Card Holder</span>
          <span className={styles.value}>
            {cardHolder || "NOMBRE APELLIDO"}
          </span>
        </div>
        <div className={styles.expiryDate}>
          <span className={styles.label}>Expires</span>
          <span className={styles.value}>{expiryDate || "MM/YY"}</span>
        </div>
      </div>
    </div>
  );
}

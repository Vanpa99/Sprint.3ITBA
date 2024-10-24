import React from "react";
import styles from "../../../modules/Tarjetas.module.css";

export default function TarjetaDebito({ tarjeta }) {
  return (
    <div className={`${styles.tarjeta} ${styles.debito}`}>
      <div className={styles.chipArea}>
        <div className={styles.chip}></div>
        <span className={styles.tipo}>{tarjeta.tipo}</span>
      </div>
      <div className={styles.numeroTarjeta}>{tarjeta.numero}</div>
      <div className={styles.detalles}>
        <div>
          <span className={styles.label}>Titular</span>
          <span className={styles.valor}>{tarjeta.titular}</span>
        </div>
        <div>
          <span className={styles.label}>Vence</span>
          <span className={styles.valor}>{tarjeta.vencimiento}</span>
        </div>
      </div>
      <div className={styles.saldo}>
        <span className={styles.label}>Saldo Disponible</span>
        <span className={styles.valor}>${tarjeta.saldo.toLocaleString()}</span>
      </div>
    </div>
  );
}

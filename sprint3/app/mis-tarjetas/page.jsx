// app/mis-tarjetas/page.jsx
"use client";
import React from "react";
import Link from "next/link";
import styles from "../../modules/Tarjetas.module.css";
import TarjetaCredito from "./components/TarjetaCredito";
import TarjetaDebito from "./components/TarjetaDebito";

export default function MisTarjetas() {
  const tarjetaCredito = {
    numero: "**** **** **** 1234",
    titular: "Juan Pérez",
    vencimiento: "12/25",
    tipo: "Visa Platinum",
    limite: 500000,
    disponible: 350000,
  };

  const tarjetaDebito = {
    numero: "**** **** **** 5678",
    titular: "Juan Pérez",
    vencimiento: "12/25",
    tipo: "Visa Débito",
    saldo: 150000,
  };

  return (
    <div className={styles.tarjetasContainer}>
      <h1 className={styles.titulo}>Mis Tarjetas</h1>
      <div className={styles.tarjetasGrid}>
        <div className={styles.tarjetaWrapper}>
          <TarjetaCredito tarjeta={tarjetaCredito} />
          <div className={styles.acciones}>
            <Link
              href="/mis-tarjetas/credito/pagar"
              className={styles.accionBtn}
            >
              Pagar
            </Link>
            <Link
              href="/mis-tarjetas/credito/limite"
              className={styles.accionBtn}
            >
              Solicitar Aumento
            </Link>
          </div>
        </div>
        <div className={styles.tarjetaWrapper}>
          <TarjetaDebito tarjeta={tarjetaDebito} />
          <div className={styles.acciones}>
            <Link
              href="/mis-tarjetas/debito/movimientos"
              className={styles.accionBtn}
            >
              Ver Movimientos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

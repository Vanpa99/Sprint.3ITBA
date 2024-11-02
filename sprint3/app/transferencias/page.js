// app/transferencias/page.js
"use client";
import { useState } from "react";
import styles from "./TransferForm.module.css";
import SEO from "../components/SEO";

const TransferenciasPage = () => {
  const [cuentaOrigen, setCuentaOrigen] = useState("Caja de Ahorro");
  const [cuentaDestino, setCuentaDestino] = useState("Cuenta Corriente");
  const [monto, setMonto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    if (monto) {
      setMensaje(
        `Transferencia de $${monto} de ${cuentaOrigen} a ${cuentaDestino} realizada con éxito.`
      );
      // Resetea el formulario
      setMonto("");
    } else {
      setMensaje("Por favor ingresa un monto.");
    }
  };

  return (
    <>
      <SEO
        title="Transferencias - ITPowerBank"
        description="Realiza transferencias de manera rápida y segura."
      />
      <div className={styles.container}>
        <h1>Realizar Transferencia</h1>
        <form onSubmit={handleTransfer} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="cuentaOrigen">Cuenta Origen:</label>
            <select
              id="cuentaOrigen"
              value={cuentaOrigen}
              onChange={(e) => setCuentaOrigen(e.target.value)}
              required
            >
              <option value="Caja de Ahorro">Caja de Ahorro</option>
              <option value="Cuenta Corriente">Cuenta Corriente</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cuentaDestino">Cuenta Destino:</label>
            <select
              id="cuentaDestino"
              value={cuentaDestino}
              onChange={(e) => setCuentaDestino(e.target.value)}
              required
            >
              <option value="Caja de Ahorro">Caja de Ahorro</option>
              <option value="Cuenta Corriente">Cuenta Corriente</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="monto">Monto:</label>
            <input
              type="number"
              id="monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              required
            />
          </div>
          <button type="submit">Transferir</button>
        </form>
        {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
      </div>
    </>
  );
};

export default TransferenciasPage;

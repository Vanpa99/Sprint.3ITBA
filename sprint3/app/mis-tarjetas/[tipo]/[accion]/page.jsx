// app/mis-tarjetas/[tipo]/[accion]/page.jsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "../../../../modules/Tarjetas.module.css";
import Boton from "../../../reutilizables/Boton";

export default function TarjetaAccion() {
  const params = useParams();
  const { tipo, accion } = params;

  const renderContenido = () => {
    if (tipo === "credito") {
      if (accion === "pagar") {
        return (
          <div className={styles.formularioAccion}>
            <h2>Pagar Tarjeta de Crédito</h2>
            <form id="pagoForm" className={styles.formulario}>
              <div className={styles.campo}>
                <label htmlFor="monto">Monto a pagar</label>
                <input type="number" id="monto" name="monto" required />
              </div>
              <div className={styles.campo}>
                <label htmlFor="cuenta">Cuenta de débito</label>
                <select id="cuenta" name="cuenta" required>
                  <option value="">Seleccionar cuenta</option>
                  <option value="1">Cuenta Corriente ****1234</option>
                  <option value="2">Caja de Ahorro ****5678</option>
                </select>
              </div>
              <Boton
                text="Realizar Pago"
                type="submit"
                className={styles.submitBtn}
                formId="pagoForm"
              />
            </form>
          </div>
        );
      } else if (accion === "limite") {
        return (
          <div className={styles.formularioAccion}>
            <h2>Solicitar Aumento de Límite</h2>
            <form id="limiteForm" className={styles.formulario}>
              <div className={styles.campo}>
                <label htmlFor="limite">Nuevo límite solicitado</label>
                <input type="number" id="limite" name="limite" required />
              </div>
              <div className={styles.campo}>
                <label htmlFor="motivo">Motivo de la solicitud</label>
                <textarea id="motivo" name="motivo" required></textarea>
              </div>
              <Boton
                text="Enviar Solicitud"
                type="submit"
                className={styles.submitBtn}
                formId="limiteForm"
              />
            </form>
          </div>
        );
      }
    } else if (tipo === "debito" && accion === "movimientos") {
      return (
        <div className={styles.movimientos}>
          <h2>Últimos Movimientos</h2>
          <div className={styles.listaMovimientos}>
            {/* Aquí podrías mapear una lista de movimientos real */}
            <div className={styles.movimiento}>
              <span className={styles.fecha}>24/10/2024</span>
              <span className={styles.descripcion}>Compra Supermercado</span>
              <span className={styles.monto}>-$15,000</span>
            </div>
            <div className={styles.movimiento}>
              <span className={styles.fecha}>23/10/2024</span>
              <span className={styles.descripcion}>Transferencia recibida</span>
              <span className={styles.monto}>+$25,000</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div className={styles.accionContainer}>{renderContenido()}</div>;
}

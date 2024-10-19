"use client";
import { useState } from "react";

function BotonTransferencia({
  text,
  cuentaOrigen,
  cuentaDestino,
  montoTransferir,
  cuentas,
  onTransferenciaExitosa,
  className = "",
  type = "button",
}) {
  const handleClick = () => {
    const cuentaSeleccionada = cuentas.find((c) => c.numero === cuentaDestino);
    const cuentaOrigenSeleccionada = cuentas.find(
      (c) => c.numero === cuentaOrigen
    );

    // Validaciones
    if (!cuentaOrigen || !cuentaDestino || !montoTransferir) {
      alert("Por favor complete todos los campos");
      return;
    }

    // Verifica que la cuenta de origen no sea la misma que la cuenta de destino
    if (cuentaOrigen === cuentaDestino) {
      alert("No puedes transferir a la misma cuenta.");
      return;
    }

    // Verifica que ambas cuentas existan
    if (!cuentaSeleccionada || !cuentaOrigenSeleccionada) {
      alert("Una o ambas cuentas no existen");
      return;
    }

    // Verifica que el monto sea válido
    if (montoTransferir <= 0) {
      alert("El monto debe ser mayor a 0");
      return;
    }

    // Verifica que hay suficiente saldo en la cuenta de origen
    if (cuentaOrigenSeleccionada.saldo >= montoTransferir) {
      // Realizar transferencia
      const nuevasCuentas = cuentas.map((cuenta) => {
        if (cuenta.numero === cuentaOrigen) {
          return { ...cuenta, saldo: cuenta.saldo - montoTransferir };
        }
        if (cuenta.numero === cuentaDestino) {
          return { ...cuenta, saldo: cuenta.saldo + montoTransferir };
        }
        return cuenta;
      });

      // Llamar al callback con las cuentas actualizadas
      if (onTransferenciaExitosa) {
        onTransferenciaExitosa(nuevasCuentas);
      }

      alert(`Transferencia de $${montoTransferir} realizada con éxito.`);
    } else {
      alert("Saldo insuficiente para realizar la transferencia.");
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={className}
      disabled={!cuentaOrigen || !cuentaDestino || !montoTransferir}
    >
      {text}
    </button>
  );
}

export default BotonTransferencia;

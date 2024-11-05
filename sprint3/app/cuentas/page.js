"use client";
import { useState, useEffect } from "react";
import { Saldo } from "../reutilizables/Api";
import Selector from "../reutilizables/Selector";
import Boton from "../reutilizables/Boton";
import styles from "../../modules/Cuentas.module.css";
import reut from "../../modules/Reut.module.css";
import { opcionesMoneda } from "../reutilizables/Selector";
import BotonTransferencia from "../reutilizables/botones/BotonTransferir";
import InputField from "../reutilizables/InputField";
import SEO from "../components/SEO";

function Cuentas() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("ARS");
  const [cuentas, setCuentas] = useState([
    { tipo: "Cuenta Corriente", numero: "123-456789-00", saldo: 50000 },
    { tipo: "Caja de Ahorro", numero: "987-654321-00", saldo: 15300 },
  ]);
  const [cuentaOrigen, setCuentaOrigen] = useState("");
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [montoTransferir, setMontoTransferir] = useState("");
  const [mensajeTransferencia, setMensajeTransferencia] = useState("");

  useEffect(() => {
    const modal = document.getElementById("accountModal");
    const closeModal = document.querySelector(".close");
    const modalAccountNumber = document.getElementById("modalAccountNumber");

    function openModal(accountNumber) {
      modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
      modal.style.display = "block";
    }

    document.querySelectorAll(".details-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const accountNumber = this.getAttribute("dataaccount");
        openModal(accountNumber);
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    return () => {
      document.querySelectorAll(".details-btn").forEach((button) => {
        button.removeEventListener("click", openModal);
      });
      closeModal.removeEventListener(
        "click",
        () => (modal.style.display = "none")
      );
      window.removeEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    };
  }, []);

  const handleTransferenciaExitosa = (nuevasCuentas) => {
    setCuentas(nuevasCuentas);
    setCuentaOrigen("");
    setCuentaDestino("");
    setMontoTransferir("");
    setMensajeTransferencia("Transferencia realizada con éxito!");
  };

  return (
    <>
      <SEO
        title="Cuentas - ITPowerBank"
        description="Gestiona todas tus cuentas bancarias en un solo lugar."
      />
      <div className={reut.contPrincipal}>
        <h2 className={reut.sectionTitle}>Mis Cuentas</h2>
        <p className={reut.subtitle}>
          Aquí puedes ver y gestionar todas tus cuentas bancarias:
        </p>
        <table className={styles.accountsTable}>
          <thead>
            <tr>
              <th>Tipo de Cuenta</th>
              <th>Número de Cuenta</th>
              <th>
                <Selector
                  name="moneda"
                  label="Saldo"
                  options={opcionesMoneda}
                  onChange={(e) => setMonedaSeleccionada(e.target.value)}
                />
              </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cuentas.map((cuenta, index) => (
              <tr key={index}>
                <td>{cuenta.tipo}</td>
                <td>{cuenta.numero}</td>
                <td>
                  <Saldo
                    saldo={cuenta.saldo}
                    fromCurrency="ARS"
                    toCurrency={monedaSeleccionada}
                  />
                </td>
                <td>
                  <Boton
                    text="Ver Detalles"
                    className="details-btn"
                    dataaccount={cuenta.numero}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal */}
        <div id="accountModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.headerModal}>
              <h3>Detalles de la Cuenta</h3>
              <span className={`close ${styles.close}`}>&times;</span>
            </div>

            <p id="modalAccountNumber"></p>
            <p>Información adicional sobre la cuenta seleccionada.</p>
          </div>
        </div>

        {/* Transferencias de cuentas */}
        <section className={styles.contPrincipal}>
          <h3 className={styles.sectionTitle}>Realizar Transferencia</h3>
          <form className={styles.formContainer}>
            <Selector
              name="cuentaOrigen"
              label="Selecciona la cuenta de origen"
              options={cuentas.map((cuenta) => ({
                value: cuenta.numero,
                label: cuenta.tipo,
              }))}
              onChange={(e) => setCuentaOrigen(e.target.value)}
              value={cuentaOrigen}
              className={styles.selectOp}
            />
            <Selector
              name="cuentaDestino"
              label="Selecciona la cuenta de destino"
              options={cuentas.map((cuenta) => ({
                value: cuenta.numero,
                label: cuenta.tipo,
              }))}
              onChange={(e) => setCuentaDestino(e.target.value)}
              value={cuentaDestino}
              className={styles.selectOp}
            />

            <InputField
              className={reut.inputField}
              type="number"
              placeholder="Monto a transferir"
              value={montoTransferir}
              onChange={(e) => setMontoTransferir(Number(e.target.value))}
            />
            <BotonTransferencia
              text="Transferir"
              cuentaOrigen={cuentaOrigen}
              cuentaDestino={cuentaDestino}
              montoTransferir={montoTransferir}
              cuentas={cuentas}
              onTransferenciaExitosa={handleTransferenciaExitosa}
            />
            {mensajeTransferencia && (
              <p className={styles.mensaje}>{mensajeTransferencia}</p>
            )}
          </form>
        </section>
      </div>
    </>
  );
}

export default Cuentas;

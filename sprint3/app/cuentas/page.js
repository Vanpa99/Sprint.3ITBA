"use client";
import { useState, useEffect } from "react";
import { Saldo } from "../reutilizables/Api";
import Selector from "../Reutilizables/Selector";
import Boton from "../Reutilizables/Boton";
import styles from "../../modules/Cuentas.module.css";
import reut from "../../modules/Reut.module.css";
import { opcionesMoneda } from "../Reutilizables/Selector";
import BotonTransferencia, {
  realizarTransferencia,
} from "../reutilizables/botones/BotonTransferir";

function Cuentas() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("ARS"); // Moneda por defecto
  const [cuentas, setCuentas] = useState([
    { tipo: "Cuenta Corriente", numero: "123-456789-00", saldo: 50000 },
    { tipo: "Caja de Ahorro", numero: "987-654321-00", saldo: 15300 },
  ]);
  const [cuentaOrigen, setCuentaOrigen] = useState("");
  const [cuentaDestino, setCuentaDestino] = useState("");
  const [montoTransferir, setMontoTransferir] = useState("");

  //- - - - - - - -

  useEffect(() => {
    const modal = document.getElementById("accountModal");
    const closeModal = document.querySelector(".close");
    const modalAccountNumber = document.getElementById("modalAccountNumber");

    // Función para abrir el modal con la información de la cuenta
    function openModal(accountNumber) {
      modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
      modal.style.display = "block";
    }

    // Agregar evento de clic a los botones de detalles
    document.querySelectorAll(".details-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const accountNumber = this.getAttribute("dataAccount");
        openModal(accountNumber);
      });
    });

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Cleanup: Eliminar los event listeners cuando el componente se desmonte
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
  //- - - - - -  - -

  return (
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
                  dataAccount={cuenta.numero}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Movimientos recientes */}
      <div className={styles.accountSummary}>
        <h3>Movimientos Recientes</h3>
        <ul>
          <li>Depósito: $2,000 (01/09/2024)</li>
          <li>Transferencia: -$500 (02/09/2024)</li>
          <li>Pago de Servicios: -$1,200 (03/09/2024)</li>
        </ul>
      </div>

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
      <section>
        <div>Selecciona la cuenta de origen</div>
        <select
          title="select"
          onChange={(e) => setCuentaOrigen(e.target.value)}
        >
          <option value="">Seleccione su cuenta</option>
          {cuentas.map((cuenta, index) => (
            <option key={index} value={cuenta.numero}>
              {cuenta.tipo}
            </option>
          ))}
        </select>

        <div>Selecciona la cuenta de destino</div>
        <select
          title="select"
          onChange={(e) => setCuentaDestino(e.target.value)}
        >
          <option value="">Seleccione su cuenta</option>
          {cuentas.map((cuenta, index) => (
            <option key={index} value={cuenta.numero}>
              {cuenta.tipo}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Monto a transferir"
          value={montoTransferir}
          onChange={(e) => setMontoTransferir(Number(e.target.value))}
        />
        {/* <Boton text="Transferir" onClick={realizarTransferencia} /> */}
        <BotonTransferencia
          text="Transferir"
          cuentaOrigen={cuentaOrigen}
          cuentaDestino={cuentaDestino}
          montoTransferir={montoTransferir}
          cuentas={cuentas}
          onTransferenciaExitosa={(nuevasCuentas) => {
            setCuentas(nuevasCuentas);
            setCuentaOrigen("");
            setCuentaDestino("");
            setMontoTransferir("");
          }}
        />
      </section>
    </div>
  );
}

export default Cuentas;

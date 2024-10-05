"use client"
import { useState, useEffect } from "react";
import { Saldo } from "../reutilizables/Api";
import  Selector  from "../Reutilizables/Selector";
import Boton from "../Reutilizables/Boton";
import styles from "../../modules/Cuentas.module.css";
import reut from "../../modules/Reut.module.css";
import { opcionesMoneda } from "../Reutilizables/Selector";



function Cuentas() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("ARS"); // Moneda por defecto
  
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
    }, [])

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
          <tr>
            <td>Cuenta Corriente</td>
            <td>123-456789-00</td>
            <td>
              <Saldo saldo={50000} fromCurrency="ARS" toCurrency={monedaSeleccionada} />
            </td>
            <td>
              <Boton text="Ver Detalles" className="details-btn" dataAccount="123-456789-00"/>
            </td>
          </tr>
          <tr>
            <td>Caja de Ahorro</td>
            <td>987-654321-00</td>
            <td>
              <Saldo saldo={15300} fromCurrency="ARS" toCurrency={monedaSeleccionada} />
            </td>
            <td>
            <Boton 
                text="Ver Detalles"
                className="details-btn"
                dataAccount="987-654321-00"
              />
            </td>
          </tr>
        </tbody>
      </table> 

       {/*Movimientos recientes*/}

       <div className={styles.accountSummary}>
        <h3>Movimientos Recientes</h3>
        <ul>
          <li>Depósito: $2,000 (01/09/2024)</li>
          <li>Transferencia: -$500 (02/09/2024)</li>
          <li>Pago de Servicios: -$1,200 (03/09/2024)</li>
        </ul>
      </div> 

       {/*Modal*/} 
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
    </div>    
  );
}

export default Cuentas;

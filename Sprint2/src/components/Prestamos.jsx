import React from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import reut from "../modules/Reut.module.css";

function Prestamos() {
  return (
    <div className={reut.contPrincipal}>
      <h2 className={reut.sectionTitle}>Calculadora De Préstamos</h2>
      <p className={reut.subtitle}>
        Para conocer el valor de los pagos mensuales que debe realizar, ingrese
        los siguientes datos:
      </p>

      <p className={reut.infoForm}>Se considerará una tasa mensual del 2%.</p>

      <form id="formId" className={reut.formContainer}>
        <InputField
          label="Ingrese el monto en pesos del préstamo que desea realizar:"
          htmlFor="monto"
          type="number"
          id="monto"
          name="monto"
          placeholder="Monto del préstamo"
          required
        />
        <InputField
          htmlFor="periodo"
          label="Ingrese el periodo de tiempo en meses en el cual abonará el
            préstamo:"
          type="number"
          id="periodo"
          name="periodo"
          placeholder="Periodo"
          required
        />
        <div className={reut.btnContainer}>
          <Boton
            type="submit"
            text="Calcular"
            action="calcular"
            formId="formId"
          />
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
        <InputField
          htmlFor="resultado"
          label="Valor calculado de los pagos mensuales a realizar:"
          type="number"
          id="resultado"
          name="resultado"
          disabled
        />
        <InputField
          htmlFor="acumulado"
          label="Valor total acumulado en el periodo indicado:"
          type="number"
          id="acumulado"
          name="acumulado"
          disabled
        />
      </form>
    </div>
  );
}

export default Prestamos;

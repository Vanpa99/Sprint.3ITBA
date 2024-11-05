import React from "react";
import Boton from "../reutilizables/Boton";
import InputField from "../reutilizables/InputField";
import reut from "../../modules/Prestamos.module.css";
import SEO from "../components/SEO";

function Prestamos() {
  return (
    <>
      <SEO
        title="Prestamos - ITPowerBank"
        description="Calcula el valor de los pagos mensuales que debe realizar."
      />

      <div className={reut.contPrincipal}>
        <h2 className={reut.sectionTitle}>Calculadora De Préstamos</h2>
        <p className={reut.subtitle}>
          Para conocer el valor de los pagos mensuales que debe realizar,
          ingrese los siguientes datos:
        </p>

        <p className={reut.infoForm}>Se considerará una tasa mensual del 2%.</p>

        <form id="formId" className={reut.formContainer}>
          <InputField
            className={reut.inputField}
            label="Ingrese el monto en pesos del préstamo que desea realizar:"
            htmlFor="monto"
            type="number"
            id="monto"
            name="monto"
            placeholder="Monto del préstamo"
            required
          />
          <InputField
            className={reut.inputField}
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
            className={reut.inputFieldDisabled}
            htmlFor="resultado"
            label="Valor calculado de los pagos mensuales a realizar:"
            type="number"
            id="resultado"
            name="resultado"
            placeholder='Precione "Calcular" para ver el resultado.'
            disabled
          />
          <InputField
            className={reut.inputFieldDisabled}
            htmlFor="acumulado"
            label="Valor total acumulado en el periodo indicado:"
            type="number"
            id="acumulado"
            name="acumulado"
            placeholder='Precione "Calcular" para ver el resultado.'
            disabled
          />
        </form>
      </div>
    </>
  );
}

export default Prestamos;

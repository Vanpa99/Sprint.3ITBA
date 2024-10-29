"use client";
import { useState } from "react";
import Boton from "../reutilizables/Boton";
import Selector from "../reutilizables/Selector";
import InputField from "../reutilizables/InputField";
import { opcionesAccion } from "../reutilizables/Selector";
import pagar from "../../modules/Pagar.module.css";
import { useRouter } from "next/navigation"; // Importar useRouter

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [codigoPago, setCodigoPago] = useState("");
  const router = useRouter(); // Inicializar useRouter

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accion === "pago") {
      // Redirigir a la página de detalles de la factura
      router.push(`/facturas/${codigoPago}`);
    } else {
      // Lógica para transferencia
      const mensajeAlerta =
        "Transferencia realizada. Le enviaremos por correo el comprobante";
      window.alert(mensajeAlerta);
    }
  };

  return (
    <div className={pagar.contPrincipal}>
      <h2 className={pagar.sectionTitle}>Métodos de Pago</h2>
      <p className={pagar.infoForm}>
        Para realizar una transferencia o pagar con código, complete los
        siguientes datos:
      </p>
      <form onSubmit={handleSubmit} id="formId" className={pagar.formContainer}>
        <Selector
          className={pagar.selectOp}
          name="accion"
          label="Seleccione el tipo de operación:"
          options={opcionesAccion}
          onChange={(e) => setAccion(e.target.value)}
        />
        {accion === "transferencia" && (
          <article>
            <InputField
              className={pagar.inputField}
              label="Ingrese CBU:"
              type="number"
              name="cbu"
              id="cbu"
              placeholder="Ingrese CBU del destinatario"
              required
            />
            <InputField
              className={pagar.inputField}
              label="Ingrese el monto:"
              type="number"
              name="monto-transferencia"
              id="monto-transferencia"
              placeholder="Ingresa el monto a pagar"
              required
            />
          </article>
        )}
        {accion === "pago" && (
          <article>
            <InputField
              className={pagar.inputField}
              label="Ingrese el código de pago:"
              type="text" // Cambiado a text para códigos alfanuméricos
              name="codigo-pago"
              id="codigo-pago"
              placeholder="Ingresa el código de pago"
              value={codigoPago}
              onChange={(e) => setCodigoPago(e.target.value)} // Capturar el código de pago
              required
            />
          </article>
        )}
        <div className={pagar.btnContainer}>
          <Boton type="submit" text="Enviar" action="submit" />
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
      </form>
    </div>
  );
}

export default Pagar;

"use client";
import { useState } from "react";
import Boton from "../Reutilizables/Boton";
import Selector from "../Reutilizables/Selector";
import InputField from "../reutilizables/InputField";
import { opcionesAccion } from "../Reutilizables/Selector";
import pagar from "../../modules/Pagar.module.css";

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [mensaje, setMensaje] = useState("");

  // Handler para el envío del formulario
  const handleSubmit = (e) => {
    //PASAR A BOTÓN 👳‍♀️🎇
    e.preventDefault();
    let mensajeAlerta = "";

    if (accion === "transferencia") {
      mensajeAlerta =
        "Transferencia realizada. Le enviaremos por correo el comprobante";
    } else if (accion === "pago") {
      mensajeAlerta = "Pago de servicio realizado. ¡Gracias por elegirnos!";
    }

    setMensaje(mensajeAlerta);
    window.alert(mensajeAlerta);
  };

  return (
    <div className={pagar.contPrincipal}>
      <h2 className={pagar.sectionTitle}>Métodos de Pago</h2>
      <p className={pagar.infoForm}>
        Para realizar una transferencia o pagar con codigo, complete los
        siguientes datos:
      </p>
      <form onSubmit={handleSubmit} id="formId" className={pagar.formContainer}>
        {/*P U L I R*/}
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
              type="number"
              name="codigo-pago"
              id="codigo-pago"
              placeholder="Ingresa el código de pago"
              required
            />
          </article>
        )}
        <div className={pagar.btnContainer}>
          <Boton type="submit" text="Enviar" action="submit" />
          {/* P U L I R */}
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
      </form>
    </div>
  );
}

export default Pagar;

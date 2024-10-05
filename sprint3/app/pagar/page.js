"use client"
import { useState } from "react";
import Boton from "../Reutilizables/Boton";
import InputField from "../Reutilizables/InputField";
import Selector from "../Reutilizables/Selector";
import { opcionesAccion } from "../Reutilizables/Selector";
import reut from "../../modules/Reut.module.css";

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [mensaje, setMensaje] = useState("");

  // Handler para el envío del formulario
  const handleSubmit = (e) => {
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
    <div className={reut.contPrincipal}>
      <h2 className={reut.sectionTitle}>Métodos de Pago</h2>
      <p className={reut.infoForm}>
        Para realizar una transferencia o pagar con codigo, complete los
        siguientes datos:
      </p>
      <form onSubmit={handleSubmit} id="formId" className={reut.formContainer}>
        {/*P U L I R*/}
        <Selector
          name="accion"
          label="Seleccione el tipo de operación:"
          options={opcionesAccion}
          onChange={(e) => setAccion(e.target.value)}
        />
        {accion === "transferencia" && (
          <article>
            <InputField
              label="Ingrese CBU:"
              type="number"
              name="cbu"
              id="cbu"
              placeholder="Ingrese CBU del destinatario"
              required
            />
            <InputField
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
              label="Ingrese el código de pago:"
              type="number"
              name="codigo-pago"
              id="codigo-pago"
              placeholder="Ingresa el código de pago"
              required
            />
          </article>
        )}
        <div className={reut.btnContainer}>
          <Boton type="submit" text="Enviar" action="submit" />
          {/* P U L I R */}
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
      </form>
    </div>
  );
}

export default Pagar;

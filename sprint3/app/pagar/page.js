 /* "use client";
import { useState } from "react";
import Boton from "../reutilizables/Boton";
import Selector from "../reutilizables/Selector";
import InputField from "../reutilizables/InputField";
import { opcionesAccion } from "../reutilizables/Selector";
import pagar from "../../modules/Pagar.module.css";
import { useRouter } from "next/navigation"; // Importar useRouter
import SEO from "../components/SEO";

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
    <>
      <SEO
        title="Pagar - ITPowerBank"
        description="Realiza pagos y transferencias de manera rápida y segura."
      />
      <div className={pagar.contPrincipal}>
        <h2 className={pagar.sectionTitle}>Métodos de Pago</h2>
        <p className={pagar.infoForm}>
          Para realizar una transferencia o pagar con código, complete los
          siguientes datos:
        </p>
        <form
          onSubmit={handleSubmit}
          id="formId"
          className={pagar.formContainer}
        >
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
    </>
  );
}

export default Pagar;  */

"use client"; // Asegúrate de que esto esté al principio

import { useState } from "react";
import Boton from "../reutilizables/Boton";
import Selector from "../reutilizables/Selector";
import InputField from "../reutilizables/InputField";
import { opcionesAccion } from "../reutilizables/Selector";
import pagar from "../../modules/Pagar.module.css";
import { useRouter } from "next/navigation";

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [codigoPago, setCodigoPago] = useState("");
  const [monto, setMonto] = useState("");
  const [cbu, setCbu] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Código de pago ingresado:", codigoPago); // Verifica el valor aquí

    if (accion === "pago") {
      const idFactura = codigoPago.trim(); // Elimina espacios en blanco
      console.log("ID factura a buscar:", idFactura); // Verifica qué ID se está buscando
      if (["1", "2", "3"].includes(idFactura)) { // Comparar como strings
        router.push(`/facturas/${idFactura}`);
      } else {
        alert("Código de pago inválido. Debe ser 1, 2 o 3.");
      }
    } else {
      alert("Transferencia realizada. Le enviaremos por correo el comprobante");
      console.log(`CBU: ${cbu}, Monto: ${monto}`);
    }
  };

  return (
    <div className={pagar.contPrincipal}>
      <h2 className={pagar.sectionTitle}>Métodos de Pago</h2>
      <p className={pagar.infoForm}>
        Para realizar una transferencia o pagar con código, complete los
        siguientes datos:
      </p>
      <form onSubmit={handleSubmit} className={pagar.formContainer}>
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
              placeholder="Ingrese CBU del destinatario"
              required
              value={cbu}
              onChange={(e) => setCbu(e.target.value)}
            />
            <InputField
              className={pagar.inputField}
              label="Ingrese el monto:"
              type="number"
              name="monto-transferencia"
              placeholder="Ingresa el monto a pagar"
              required
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </article>
        )}
        {accion === "pago" && (
          <article>
            <InputField
              className={pagar.inputField}
              label="Ingrese el código de pago (1, 2 o 3):"
              type="text"
              name="codigo-pago"
              placeholder="Ingresa el código de pago"
              value={codigoPago}
              onChange={(e) => {
                console.log("Cambio en código de pago:", e.target.value); // Agrega log aquí
                setCodigoPago(e.target.value);
              }}
              required
            />
          </article>
        )}
        <div className={pagar.btnContainer}>
          <Boton type="submit" text="Enviar" />
          <Boton type="button" text="Limpiar" action="clear"/>
        </div>
      </form>
    </div>
  );
}

export default Pagar;
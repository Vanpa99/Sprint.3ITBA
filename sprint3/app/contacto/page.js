"use client";
import React, { useState } from "react";
import Boton from "../reutilizables/Boton";
import InputField from "../reutilizables/InputField";
import contacto from "../../modules/Contacto.module.css";
import SEO from "../components/SEO";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

    // Validar que todos los campos estén llenos
    if (!nombre || !correo || !mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Mostrar los datos en la consola
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    // Mostrar alerta para verificar que se han capturado correctamente
    alert(
      `Mensaje enviado con exito, en breves nos estamos contactando con usted.`
    );

    // Limpiar los campos después del envío
    setNombre("");
    setCorreo("");
    setMensaje("");
    setError(""); // Limpiar mensaje de error
  };

  return (
    <>
      <SEO
        title="Contacto - ITPowerBank"
        description="Ponte en contacto con nosotros para cualquier consulta o asistencia."
      />
      <div className={contacto.contPrincipal}>
        <h2 className={contacto.sectionTitle}>Métodos de Pago</h2>
        <p className={contacto.infoForm}>
          Por favor, complete el formulario de contacto, para poder ser
          contactado por uno de nuestros asesores.
        </p>

        <form onSubmit={handleSubmit} className={contacto.formContainer}>
          <InputField
            className={contacto.inputField}
            htmlFor="nombre"
            label="Nombre:"
            type="text"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre completo."
            required
          />
          <InputField
            className={contacto.inputField}
            htmlFor="correo"
            label="Correo Electrónico:"
            type="email"
            name="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingrese su Email."
            required
          />
          <InputField
            className={contacto.inputField}
            htmlFor="mensaje"
            label="Mensaje:"
            type="textarea"
            name="mensaje"
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Deje su mensaje."
            required
          />
          <Boton type="submit" text="Enviar" action="submit" />
        </form>
      </div>
    </>
  );
};

export default FormularioContacto;

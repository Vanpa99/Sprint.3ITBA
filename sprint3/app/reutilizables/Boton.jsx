"use client";
import React from "react";
// import PropTypes from "prop-types";

function Boton({
  text,
  onClick,
  type = "button",
  className = "",
  dataAccount,
  action,
  formId,
  onClear,
}) {
  const handleClear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = ""; // Limpia el valor de cada input
    });
    if (onClear) {
      onClear();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById(formId); // Busca el formulario por ID
    if (form) {
      const monto = document.getElementById("monto").value;
      const periodo = document.getElementById("periodo").value;
      const tasa = 0.02;

      const numerador = tasa * monto;
      const denominador = 1 - (1 + tasa) ** -periodo;

      const resul = numerador / denominador;
      const resultado = resul.toFixed(2);

      const acum = resultado * periodo;
      const acumulado = acum.toFixed(2);

      document.getElementById("resultado").value = resultado;
      document.getElementById("acumulado").value = acumulado;
    }
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e); // Si se ha proporcionado una función onClick, se llama a ella.
    }
    switch (action) {
      case "clear":
        handleClear(); // Si la acción es limpiar, limpia los inputs.
        break;
      case "submit":
        handleSubmit(); // Si la acción es enviar, envía el formulario.
        break;
      case "calcular":
        const monto = document.getElementById("monto").value;
        const periodo = document.getElementById("periodo").value;
        if (monto === "" || periodo === "") {
          handleSubmit();
        } else {
          handleSubmit(e);
        }
        break;
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={className}
      dataAccount={dataAccount}
      autoComplete="off"
    >
      {text}
    </button>
  );
}

// Boton.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   type: PropTypes.string,
//   className: PropTypes.string,
//   dataAccount: PropTypes.string,
//   formId: PropTypes.string.isRequired,
//   onClear: PropTypes.func,
// };

export default Boton;

import React, { useState } from "react";
import styles from "../../modules/Selector.module.css";

export const opcionesMoneda = [
  { value: "ARS", label: "ARS" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "BRL", label: "BRL" },
  { value: "CLP", label: "CLP" },
];

export const opcionesAccion = [
  { value: "transferencia", label: "Transferencia" },
  { value: "pago", label: "Pago" },
];

function Selector({ name, options, label, onChange, value, className }) {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState(value);

  /* const manejarCambioMoneda = (e) => {
    const nuevaMoneda = e.target.value;
    setMonedaSeleccionada(nuevaMoneda);
    if (onChange) {
      onChange(e); 
    }
  }; */

  return (
    <div className={styles.selectOp}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    /* <div>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
         onChange={manejarCambioMoneda} 
         value={monedaSeleccionada} 
        className={`input-selector ${className}`}
      >
        {opcionesMoneda.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>  */
  );
}

//opciones pagos

/* function Pago({ name, label, options, onChange, value }) {
  return (
    <div className="select-op">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} */

export default Selector;

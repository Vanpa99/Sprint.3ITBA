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
  return (
    <div className={className}>
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
}

export default Selector;

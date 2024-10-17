/* "use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import facturas from "../../data/facturas";

const FacturaDetalles = () => {
  const router = useRouter();
  const [factura, setFactura] = useState(null);

  useEffect(() => {
    // Espera a que el router esté listo
    if (!router || !router.asPath) return;

    const id = router.asPath.split("/").pop(); // Extrae el ID del pathname

    // Busca la factura correspondiente
    const facturaEncontrada = facturas.find((factura) => factura.id === id);
    setFactura(facturaEncontrada);
  }, [router]);

  if (!factura) {
    return <div>Factura no encontrada.</div>;
  }

  return (
    <div>
      <h2>Detalles de la Factura {factura.id}</h2>
      <p>Monto: ${factura.monto}</p>
      <p>Fecha: {factura.fecha}</p>
      <p>Descripción: {factura.descripcion}</p>
    </div>
  );
};

export default FacturaDetalles; */

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import facturas from "../../data/facturas";

const FacturaDetalles = () => {
  const router = useRouter();
  const [factura, setFactura] = useState(null);

  useEffect(() => {
    // Espera a que el router esté listo
    if (!router || !router.asPath) return;

    const id = router.asPath.split("/").pop(); // Extrae el ID del pathname
    console.log("ID obtenido:", id); // Debugging

    // Busca la factura correspondiente
    const facturaEncontrada = facturas.find((factura) => factura.id === id);
    console.log("Factura encontrada:", facturaEncontrada); // Debugging

    setFactura(facturaEncontrada);
  }, [router]);

  if (!factura) {
    return <div>Factura no encontrada.</div>;
  }

  return (
    <div>
      <h2>Detalles de la Factura {factura.id}</h2>
      <p>Monto: ${factura.monto}</p>
      <p>Fecha: {factura.fecha}</p>
      <p>Descripción: {factura.descripcion}</p>
    </div>
  );
};

export default FacturaDetalles;

"use client"; // Asegúrate de que esto esté al principio

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const facturas = [
  {
    id: "1",
    monto: 150.00,
    fecha: "2024-10-01",
    descripcion: "Factura por servicios de internet",
  },
  {
    id: "2",
    monto: 75.50,
    fecha: "2024-10-15",
    descripcion: "Factura por servicio de electricidad",
  },
  {
    id: "3",
    monto: 200.75,
    fecha: "2024-10-20",
    descripcion: "Factura por servicio de agua",
  },
];

const FacturaDetalles = () => {
  const router = useRouter();
  const [factura, setFactura] = useState(null);

  useEffect(() => {
    if (!router || !router.asPath) return;
  
    const idFromUrl = router.asPath.split("/").pop();
    const id = parseInt(idFromUrl); // Convertimos el ID de la URL a un número
  
    console.log("ID obtenido (número):", id);
  
    const facturaEncontrada = facturas.find((factura) => factura.id === id);
    console.log("Factura encontrada:", facturaEncontrada);
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
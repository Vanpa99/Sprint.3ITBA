"use client";
import { useState } from "react";
import Link from "next/link";
import CreditCard from "../../components/CreditCard/CreditCard";
import SEO from "@/app/components/SEO";
import cardNumber from "./cardNumber.module.css";
import InputField from "@/app/reutilizables/InputField";

export default function CardDetailPage({ params }) {
  const MINIMUM_LIMIT = 2500000;
  const [currentLimit, setCurrentLimit] = useState(2500000); // Límite inicial
  const [requestedAmount, setRequestedAmount] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleLimitRequest = async (e) => {
    e.preventDefault();

    // Validar monto mínimo
    if (parseInt(requestedAmount) < MINIMUM_LIMIT) {
      setError(
        `El monto solicitado no puede ser menor a $${MINIMUM_LIMIT.toLocaleString()}`
      );
      setStatus("");
      return;
    }

    setError(""); // Limpiar error si existe
    setStatus("processing");

    try {
      // Simulamos un proceso de aprobación
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulamos una lógica de aprobación simple
      if (parseInt(requestedAmount) <= currentLimit * 2) {
        setCurrentLimit(parseInt(requestedAmount));
        setStatus("approved");
      } else {
        setStatus("rejected");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleAmountChange = (e) => {
    setRequestedAmount(e.target.value);
    // Limpiar mensaje de error cuando el usuario comienza a escribir
    if (error) setError("");
  };

  // Datos de ejemplo - en un caso real vendrían de una base de datos
  const cardData = {
    type: params.cardNumber.startsWith("4") ? "default" : "gold",
    cardNumber: params.cardNumber,
    cardHolder: params.cardNumber.startsWith("4")
      ? "PABLO GODOY"
      : "MATIAS VAN PAMELEN",
    expiryDate: params.cardNumber.startsWith("4") ? "12/25" : "03/26",
  };

  return (
    <>
      <SEO
        title="Detalles de la Tarjeta - ITPowerBank"
        description="Detalles de la tarjeta de crédito"
      />
      <div className={cardNumber.contPrincipal}>
        <h1 className={cardNumber.sectionTitle}>Detalles de la Tarjeta</h1>

        <Link href="/mis-tarjetas">← Volver a tarjetas</Link>

        <div>
          <CreditCard {...cardData} />
        </div>

        <div>
          <h2 className={cardNumber.sectionTitle}>
            Solicitar Aumento de Límite
          </h2>

          <p className={cardNumber.infoForm}>
            Límite actual: ${currentLimit.toLocaleString()}
          </p>

          <form
            onSubmit={handleLimitRequest}
            className={cardNumber.formContainer}
          >
            <div>
              {/* <InputField
                label="Nuevo límite solicitado:"
                type="number"
                value={requestedAmount}
                onChange={handleAmountChange}
                min={MINIMUM_LIMIT}
                className={cardNumber.inputField}
                placeholder={`Mínimo $${MINIMUM_LIMIT.toLocaleString()}`}
                required
              /> */}
              <label className="block text-sm font-medium text-gray-700">
                Nuevo límite solicitado:
              </label>
              <input
                type="number"
                value={requestedAmount}
                onChange={handleAmountChange}
                min={MINIMUM_LIMIT}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder={`Mínimo $${MINIMUM_LIMIT.toLocaleString()}`}
                required
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              disabled={status === "processing"}
            >
              {status === "processing" ? "Procesando..." : "Solicitar Aumento"}
            </button>
          </form>

          {status && status !== "processing" && (
            <div
              className={`mt-4 p-4 rounded-md ${
                status === "approved"
                  ? "bg-green-100 text-green-800"
                  : status === "rejected"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status === "approved" &&
                "¡Su solicitud ha sido aprobada! El nuevo límite ya está disponible."}
              {status === "rejected" &&
                "Lo sentimos, su solicitud no pudo ser aprobada en este momento."}
              {status === "error" &&
                "Ocurrió un error. Por favor intente nuevamente."}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

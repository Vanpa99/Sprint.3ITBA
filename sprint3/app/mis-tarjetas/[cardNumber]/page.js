    'use client';
import { useState } from 'react';
import Link from 'next/link';
import CreditCard from "../../components/CreditCard/CreditCard";

export default function CardDetailPage({ params }) {
  const MINIMUM_LIMIT = 2500000;
  const [currentLimit, setCurrentLimit] = useState(2500000); // Límite inicial
  const [requestedAmount, setRequestedAmount] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleLimitRequest = async (e) => {
    e.preventDefault();
    
    // Validar monto mínimo
    if (parseInt(requestedAmount) < MINIMUM_LIMIT) {
      setError(`El monto solicitado no puede ser menor a $${MINIMUM_LIMIT.toLocaleString()}`);
      setStatus('');
      return;
    }

    setError(''); // Limpiar error si existe
    setStatus('processing');
    
    try {
      // Simulamos un proceso de aprobación
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulamos una lógica de aprobación simple
      if (parseInt(requestedAmount) <= currentLimit * 2) {
        setCurrentLimit(parseInt(requestedAmount));
        setStatus('approved');
      } else {
        setStatus('rejected');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleAmountChange = (e) => {
    setRequestedAmount(e.target.value);
    // Limpiar mensaje de error cuando el usuario comienza a escribir
    if (error) setError('');
  };

  // Datos de ejemplo - en un caso real vendrían de una base de datos
  const cardData = {
    type: params.cardNumber.startsWith('4') ? "default" : "gold",
    cardNumber: params.cardNumber,
    cardHolder: params.cardNumber.startsWith('4') ? "PABLO GODOY" : "MATIAS VAN PAMELEN",
    expiryDate: params.cardNumber.startsWith('4') ? "12/25" : "03/26"
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Detalles de la Tarjeta</h1>
      
      <Link href="/mis-tarjetas" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Volver a tarjetas
      </Link>
      
      <div className="mb-8">
        <CreditCard {...cardData} />
      </div>

      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Solicitar Aumento de Límite</h2>
        
        <div className="mb-4">
          <p className="text-gray-600">Límite actual: ${currentLimit.toLocaleString()}</p>
        </div>

        <form onSubmit={handleLimitRequest} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nuevo límite solicitado
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
            {error && (
              <p className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            disabled={status === 'processing'}
          >
            {status === 'processing' ? 'Procesando...' : 'Solicitar Aumento'}
          </button>
        </form>

        {status && status !== 'processing' && (
          <div className={`mt-4 p-4 rounded-md ${
            status === 'approved' ? 'bg-green-100 text-green-800' :
            status === 'rejected' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {status === 'approved' && '¡Su solicitud ha sido aprobada! El nuevo límite ya está disponible.'}
            {status === 'rejected' && 'Lo sentimos, su solicitud no pudo ser aprobada en este momento.'}
            {status === 'error' && 'Ocurrió un error. Por favor intente nuevamente.'}
          </div>
        )}
      </div>
    </div>
  );
}
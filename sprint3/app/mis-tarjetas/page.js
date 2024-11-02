// app/cards/page.js - Ruta estática
/* import CreditCard from "../components/CreditCard/CreditCard";
export default function CardsPage() {
  return (
    <div>
      <h1>Nuestras Tarjetas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CreditCard
          type="default"
          cardNumber="4111111111111111"
          cardHolder="PABLO GODOY"
          expiryDate="12/25"
        />
        <CreditCard
          type="gold"
          cardNumber="5555555555554444"
          cardHolder="MATIAS VAN PAMELEN"
          expiryDate="03/26"
        />
      </div>
    </div>
  ); */

  import Link from 'next/link';
  import CreditCard from "../components/CreditCard/CreditCard";
  
  export default function CardsPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Nuestras Tarjetas</h1>
        <div className="flex flex-wrap gap-6">
          <Link href={`/mis-tarjetas/4111111111111111`}>
            <div className="cursor-pointer transition-transform hover:scale-105">
              <CreditCard
                type="default"
                cardNumber="4111111111111111"
                cardHolder="PABLO GODOY"
                expiryDate="12/25"
              />
            </div>
          </Link>
          
          <Link href={`/mis-tarjetas/5555555555554444`}>
            <div className="cursor-pointer transition-transform hover:scale-105">
              <CreditCard
                type="gold"
                cardNumber="5555555555554444"
                cardHolder="MATIAS VAN PAMELEN"
                expiryDate="03/26"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
